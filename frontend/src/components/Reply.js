import React from 'react';
import Button from './form/Button';
import '../css/reply.css';
import UserContext from '../UserContext';
import { POST_NEW_REPLY } from '../api/api';

const Reply = ({ messageId, show }) => {
  const { login } = React.useContext(UserContext);
  const [content, setContent] = React.useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    if (login) {
      const token = window.localStorage.getItem('token');
      console.log(token);
      const { url, options } = POST_NEW_REPLY({ content }, messageId, token);
      const response = await fetch(url, options);
      console.log(response);
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
          name=''
          id=''
          rows='3'
          value={content}
          onChange={handleChange}
        ></textarea>
        <div className='reply-options'>
          <button className='inline button-close gray'>x</button>
          <Button color='primary' block='inline'>
            Enviar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Reply;
