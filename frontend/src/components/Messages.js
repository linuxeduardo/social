import React from 'react';
import Message from './Message';

const Messages = () => {
  return (
    <div className='messages'>
      <div className='container'>
        <Message />
        <Message />
        <Message />
      </div>
    </div>
  );
};

export default Messages;
