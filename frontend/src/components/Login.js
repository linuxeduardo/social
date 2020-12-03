import React from 'react';
import '../css/login.css';
import Logo from './Logo';

const Login = () => {
  return (
    <div className='login'>
      <div className='login-left-side'>1</div>
      <div className='login-right-side'>
        <div className='container'>
          <div>
            <Logo />
          </div>
          <div className='title serif'>Log in to your account</div>
          <div className='goo-login mt-5'>
            <button className='primary'>Google Login</button>
          </div>
          <div className='divider line mt-5'>or</div>
          <div className='input-field  mt-5'>
            <label htmlFor='loginEmail'>Email Address:</label>
            <input
              className='sans'
              type='email'
              name='loginEmail'
              id='loginEmail'
            />
          </div>
          <div className='button'>
            <button className='secondary' type='submit'>
              NEXT
            </button>
          </div>
          <div className='create-new-account mt-8'>
            Don't have an account? <a href='/register'>Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
