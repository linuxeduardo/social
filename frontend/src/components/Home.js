import React from 'react';
import UserContext from '../UserContext';
import Messages from './Messages';
import NewMessage from './NewMessage';
import Users from './Users';

const Home = () => {
  const { fetchData } = React.useContext(UserContext);

  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className='home'>
      <NewMessage />
      <Messages />
      <Users />
    </div>
  );
};

export default Home;
