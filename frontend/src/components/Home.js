import React from 'react';
import Messages from './Messages';
import MessageModal from './MessageModal';

const Home = () => {
  return (
    <div>
      <h3>Home</h3>
      <MessageModal />
      <Messages />
    </div>
  );
};

export default Home;
