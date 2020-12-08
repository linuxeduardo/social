import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../css/login.css';
import Input from './form/Input';
import Logo from './Logo';
import useForm from '../hooks/useForm';
import Button from './form/Button';
import UserContext from '../UserContext';
import Error from '../helpers/Error';

const Login = () => {
  const email = useForm();
  const password = useForm();

  /* eslint-disable-next-line */
  const { error, loading, login, userLogin } = React.useContext(UserContext);

  if (login) return <Redirect to='/' />;

  const handleSubmit = async e => {
    e.preventDefault();
    if (email.validate() && password.validate()) {
      userLogin(email.value, password.value);
    }
  };

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

          <form onSubmit={handleSubmit}>
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

            <div className='button mt-5'>
              {loading ? (
                <Button disabled color='gray'>
                  Log In ..
                </Button>
              ) : (
                <Button color='secondary'>Log In</Button>
              )}

              <small className='todo'>
                todo: verify email, if ok show password input, todo: fix email
                validation, Photo by Sajad Nori on Unsplash
              </small>
            </div>

            {error && (
              <div className='error'>
                <Error error={error} />
              </div>
            )}
          </form>

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
