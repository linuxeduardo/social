import React from 'react';
import { DELETE_MESSAGE } from '../api/api';
import UserContext from '../UserContext';
import Reply from './Reply';
import '../css/message.css';

const Message = ({
  content,
  username,
  messageId,
  userId,
  messageUserId,
  replies
}) => {
  const { fetchData, login } = React.useContext(UserContext);
  const [show, setShow] = React.useState('none');

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

  const handleReply = () => {
    setShow('block');
  };

  return (
    <>
      <div className='message'>
        <div className='message-username'>@{username}</div>
        <div className='message-content'>
          <span>{content}</span>
        </div>

        <div className='message-options'>
          <div className='message-content--reply'>
            {login && (
              <button className='button-link' onClick={handleReply}>
                responder
              </button>
            )}
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
      <Reply messageId={messageId} show={show} replies={replies} />
    </>
  );
};

export default Message;
