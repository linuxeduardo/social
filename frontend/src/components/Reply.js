import React from 'react';
import Button from './form/Button';
import UserContext from '../UserContext';
import { POST_NEW_REPLY } from '../api/api';
import '../css/reply.css';

const Reply = ({ messageId, show, replies }) => {
  const { login } = React.useContext(UserContext);
  const [content, setContent] = React.useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    if (login) {
      const token = window.localStorage.getItem('token');
      const { url, options } = POST_NEW_REPLY({ content }, messageId, token);
      await fetch(url, options);
    } else {
      alert('Você precisa estar logado para enviar uma resposta.');
    }
    setContent('');
  };

  const handleChange = e => {
    setContent(e.target.value);
  };

  return (
    <div className='reply' style={{ display: show }}>
      <form onSubmit={handleSubmit}>
        <textarea
          name='replyMessage'
          id='replyMessage'
          rows='3'
          value={content}
          onChange={handleChange}
        ></textarea>
        <div className='reply-options'>
          <button className='inline button-close gray'>close</button>
          <Button color='primary' block='inline'>
            Enviar
          </Button>
        </div>
      </form>
      {/*  */}
      <div className='replies'>
        {replies && replies.map(i => <small key={i}>{i}</small>)}
      </div>
    </div>
  );
};

export default Reply;
