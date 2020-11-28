import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Register = () => {
  return (
    <div className='login'>
      <div>
        <Logo />
        <div className='login-grid'>
          <div>
            <h3 className='subtitle'>Registro</h3>
            <div className='form-group'>
              <label>name</label>
              <input placeholder='name' type='text' />
            </div>
            <div className='form-group'>
              <label>email</label>
              <input placeholder='email' type='email' />
            </div>
            <div className='form-group'>
              <label>password</label>
              <input placeholder='password' type='text' />
            </div>
            <button className='button-red button'>Registrar</button>
            <div className='align-to-left'>
              <Link className='link-to' to='login'>
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
