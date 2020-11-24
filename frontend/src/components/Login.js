import React from 'react';

const Login = () => {
  return (
    <div>
      <h3>Login</h3>
      <div>
        <label>email</label>
        <input type='email' />
        <label>password</label>
        <input type='text' />
        <button>Entrar</button>
      </div>
    </div>
  );
};

export default Login;
