import React from 'react';

const Checkbox = ({ content, name }, props) => {
  return (
    <>
      <input type='checkbox' name={name} id={name} {...props} />
      <label htmlFor={name}>{content}</label>
    </>
  );
};

export default Checkbox;
