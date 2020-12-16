import React from 'react';
import UserContext from '../UserContext';
import Message from './Message';

const MyMessages = () => {
  const { messagesByUser, messageDataByUser, data } = React.useContext(
    UserContext
  );

  React.useEffect(() => {
    messageDataByUser();
  }, []);

  return (
    <div style={{ marginTop: '4px' }} className='messages'>
      {(messagesByUser &&
        messagesByUser.map(d => (
          <Message
            key={d._id}
            content={d.content}
            username={d.name.name}
            messageId={d._id}
            messageUserId={d.name._id}
            userId={data && data._id}
          />
        ))) || <p>user has no message</p>}
    </div>
  );
};

export default MyMessages;
