import React from 'react';
import { DELETE_MESSAGE } from '../api/api';
import '../css/message.css';
import UserContext from '../UserContext';

const Messages = ({ content, username, messageId, userId, messageUserId }) => {
  const { fetchData, login } = React.useContext(UserContext);

  const deleteMessage = async messageId => {
    const ok = window.confirm('Press');
    if (ok) {
      try {
        const token = window.localStorage.getItem('token');
        const { url, options } = DELETE_MESSAGE(messageId, token);
        const response = await fetch(url, options);
        await response.json();
      } catch (err) {
        console.log(err);
      } finally {
        fetchData();
      }
    }
  };

  return (
    <div className='message'>
      <div className='message-username'>@{username}</div>
      <div className='message-content'>
        <span>{content}</span>
        <div className='message-options'>
          <div className='message-content--reply'>
            {login && <button className='button-link'>responder</button>}
          </div>
          <div className='message-content--delete'>
            {messageUserId === userId ? (
              <button
                onClick={() => deleteMessage(messageId)}
                className='button-link'
              >
                Apagar mensagem
              </button>
            ) : (
              ''
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Messages;
