import React from 'react';
import '../css/login.css';
import Input from './form/Input';
import Logo from './Logo';
import useForm from '../hooks/useForm';
import { Link } from 'react-router-dom';
import Button from './form/Button';

const Login = () => {
  const email = useForm();
  const password = useForm('password');

  return (
    <div className='login'>
      <div className='login-left-side'>image</div>
      <div className='login-right-side'>
        <div className='login-right-side--container'>
          <div>
            <Logo />
          </div>
          <div className='title serif'>
            <h3>Log in to your account</h3>
          </div>
          <div className='goo-login mt-5'>
            <button className='primary'>Google Login</button>
          </div>
          <div className='divider line mt-5'>or</div>
          <div className='input-field  mt-5'>
            <Input
              label='Email Address:'
              type='email'
              name='loginEmail'
              placeholder='Digite seu email aqui...'
              {...email}
            />
            <Input
              label='Password:'
              type='password'
              name='loginPassword'
              placeholder='Digite sua senha aqui...'
              {...password}
            />
          </div>

          <div className='button mt-5'>
            <Button color='secondary'>Next</Button>

            <small className='todo'>
              todo: verify email, if ok show password input, todo: fix email
              validation, Photo by Sajad Nori on Unsplash
            </small>
          </div>
          <div className='login-right-side--new-account mt-8'>
            Don't have an account?{' '}
            <Link to='/register'>
              <span>Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
