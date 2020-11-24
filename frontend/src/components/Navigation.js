import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='Menu'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/profile'>Profile</Link>
        </li>
        <li>
          <Link to='/friends'>Friends</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/register'>Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
