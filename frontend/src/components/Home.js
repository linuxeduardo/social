import React from 'react';
import Message from './Message';
import MessageModal from './MessageModal';

const Home = () => {
  return (
    <div>
      <h3>Home</h3>
      <MessageModal />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default Home;
