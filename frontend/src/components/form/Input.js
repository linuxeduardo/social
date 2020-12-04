import React from 'react';

const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  error,
  onBlur
}) => {
  return (
    <div className='mt-5'>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {error && <p className='error-message'>{error}</p>}
    </div>
  );
};

export default Input;
