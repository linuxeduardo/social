import React from 'react';
import { Link } from 'react-router-dom';
import Message from '../assets/message.svg';
import Smile from '../assets/smile.svg';
import Bell from '../assets/bell.svg';
import Send from '../assets/send.svg';
import Profile from './Profile';

const Navigation = () => {
  return (
    <nav className='Menu'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/profile'>
            <img src={Smile} alt='profile' />
            <span>Profile</span>
          </Link>
        </li>
        <li>
          <Link to='/messages'>
            <img src={Message} alt='mensagens' />
            <span>Mensagens</span>
          </Link>
        </li>
        <li>
          <Link to='/friends'>
            <img src={Smile} alt='smile' />
            <span>Amigos</span>
          </Link>
        </li>
        <li>
          <Link to='/login'>
            <img src={Bell} alt='login' />
            <span>Login</span>
          </Link>
        </li>
        <li>
          <Link to='/register'>
            <img src={Send} alt='respostas' />

            <span>Register</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
