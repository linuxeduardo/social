import React from 'react';
import companyLogo from '../assets/companyLogo.svg';

const Logo = () => {
  return (
    <img
      className='logo-svg'
      src={companyLogo}
      alt='companyLogo Social Network'
    />
  );
};

export default Logo;
