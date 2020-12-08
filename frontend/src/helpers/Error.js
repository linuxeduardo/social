import React from 'react';

const Error = ({ error }) => {
  if (!error) return null;

  return <span>{error}</span>;
};

export default Error;
