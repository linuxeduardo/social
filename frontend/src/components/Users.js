import React from 'react';
import { GET_USERS } from '../api/api';

const Users = () => {
  const [data, setData] = React.useState(null);

  const getUsers = async e => {
    e.preventDefault();

    try {
      const { url, options } = GET_USERS();
      const response = await fetch(url, options);
      const json = await response.json();
      setData(json);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={getUsers}>
        <button>get</button>
      </form>
      <div
        className='users-users'
        style={{ background: '#fff', marginBottom: '1rem' }}
      >
        {data && data.map(u => <li key={u._id}>{u.name}</li>)}
      </div>
    </div>
  );
};

export default Users;
