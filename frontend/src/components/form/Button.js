import React from 'react';

const Button = ({ children, color, ...props }) => {
  return (
    <button className={`${color}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
