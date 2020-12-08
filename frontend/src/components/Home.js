import React from 'react';
import Messages from './Messages';
import Users from './Users';

const Home = () => {
  return (
    <div className='home'>
      <Messages />
      <Users />
    </div>
  );
};

export default Home;
