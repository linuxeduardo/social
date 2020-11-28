import React from 'react';
import { Link } from 'react-router-dom';
import '../css/login.css';
import Logo from './Logo';

const Login = () => {
  return (
    <div className='login'>
      <div>
        <Logo />
        <div className='login-grid'>
          <div>
            <h3 className='subtitle'>Login</h3>

            <div className='form-group'>
              <label>email</label>
              <input placeholder='email' type='email' />
            </div>

            <div className='form-group'>
              <label>password</label>
              <input placeholder='password' type='text' />
            </div>

            <button className='button-red button'>Entrar</button>

            <div className='align-to-left'>
              <Link className='link-to' to='register'>
                Registro
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
