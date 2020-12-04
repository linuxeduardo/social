import React from 'react';
import '../css/message.css';

const Messages = ({ content }) => {
  return (
    <div className='message'>
      <div className='message-username'>username</div>
      <div className='message-content'>
        <div>{content}</div>
        <div className='message-content--reply'>reply</div>
      </div>
    </div>
  );
};

export default Messages;
