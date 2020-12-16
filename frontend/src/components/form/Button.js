import React from 'react';

const Button = ({ children, color, block, ...props }) => {
  return (
    <button className={`${color} ${block}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
