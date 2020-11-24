import React from 'react';

const Register = () => {
  return (
    <div>
      <div>
        <h3>Register</h3>
        <div>
          <label>username</label>
          <input type='text' />
          <label>email</label>
          <input type='email' />
          <label>data de nascimento</label>
          <input type='date' />
          <label>password</label>
          <input type='text' />
          <button>Registrar</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
