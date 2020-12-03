let server;
const request = require('supertest');
const { Message } = require('../../models/message');
const { User } = require('../../models/user');
const mongoose = require('mongoose');

describe('/api/messages', () => {
  beforeEach(() => {
    server = require('../../bin/www');
  });

  afterEach(async () => {
    server.close();
    await Message.remove({});
  });

  describe('GET /', () => {
    it('should return all messages', async () => {
      await Message.collection.insertMany([
        {
          content: 'testing...',
          userId: new mongoose.Types.ObjectId().toHexString()
        },
        {
          content: 'testing2...',
          userId: new mongoose.Types.ObjectId().toHexString()
        },
        {
          content: 'testing3...',
          userId: new mongoose.Types.ObjectId().toHexString()
        }
      ]);

      const res = await request(server).get('/api/messages');
      expect(res.status).toBe(200);
      expect(res.body.length).toBe(3);
      expect(res.body.some(g => g.content === 'testing3...')).toBeTruthy();

      await removeAllCollections();

      await Message.remove({});
    });
  });

  describe('GET /:id', () => {
    it('should return a message if valid id is passed', async () => {
      const message = new Message({
        content: 'new mew',
        userId: new mongoose.Types.ObjectId().toHexString()
      });
      await message.save();

      const res = await request(server).get('/api/messages/' + message._id);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('content', message.content);
    });

    it('should return 404 if invalid id is passed', async () => {
      const res = await request(server).get('/api/messages/1');
      expect(res.status).toBe(404);
    });
  });

  describe('POST /', () => {
    // define path
    // and the in each test
    // we change one parameter

    let token;
    let content;

    const exec = async () => {
      return await request(server)
        .post('/api/messages')
        .set('x-auth-token', token)
        .send({ content });
    };

    beforeEach(() => {
      token = new User().generateAuthToken();
      content = 'message...';
    });

    it('should return 401 if client is not logged in', async () => {
      token = '';
      const res = await exec();
      expect(res.status).toBe(401);
    });

    it('should return 400 if message is less than 5 characters', async () => {
      content = '1234';
      const res = await exec();
      expect(res.status).toBe(400);
    });

    it('should return 400 if message is more than 50 characters', async () => {
      content = '12345'.repeat(10);
      const res = await exec();
      expect(res.status).toBe(400);
    });

    it('should save the message if it is valid', async () => {
      await exec();
      const message = await Message.find({ content: 'message1' });
      expect(message).not.toBeNull();
    });

    it('should return the message if it is valid', async () => {
      const res = await exec();
      // expect(res.body).toHaveProperty('_id');
      // expect(res.body).toHaveProperty('content', 'message4');
      // FIXME:
    });
  });
});

async function removeAllCollections() {
  const collections = Object.keys(mongoose.connection.collections);
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    await collection.deleteMany();
  }
}
