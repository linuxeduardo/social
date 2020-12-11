import React from 'react';
import Messages from './Messages';
import NewMessage from './NewMessage';
import Users from './Users';

const Home = () => {
  return (
    <div className='home'>
      <NewMessage />
      <Messages />
      <Users />
    </div>
  );
};

export default Home;
