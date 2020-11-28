import React from 'react';
import Mess from '../assets/Mess.svg';

const Logo = () => {
  return (
    <div className='logo'>
      <img src={Mess} alt='Mess Social Network' />
      <p className='social-subtitle'>SOCIAL NETWORK</p>
    </div>
  );
};

export default Logo;
