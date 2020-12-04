import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../hooks/useForm';
import UserContext from '../UserContext';
import Button from './form/Button';
import Input from './form/Input';
import Logo from './Logo';

const Register = () => {
  const email = useForm();
  const firstName = useForm();
  const lastName = useForm();
  const password = useForm();
  const country = useForm();

  const { error, loading, login, userRegister } = React.useContext(UserContext);

  const handleSubmit = async e => {
    e.preventDefault();
    if (firstName.validate() && email.validate() && password.validate()) {
      userRegister(firstName.value, email.value, password.value);
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
            <h3>Create your account</h3>
          </div>
          <div className='goo-login mt-5'>
            <button className='primary'>Google Login</button>
          </div>
          <div className='divider line mt-5'>or</div>

          <form onSubmit={handleSubmit}>
            <Input
              label='Email Address'
              type='email'
              name='loginEmail'
              placeholder='Digite seu email aqui...'
              {...email}
            />
            <Input
              label='First Name'
              type='text'
              name='loginFirstName'
              placeholder='Digite seu nome aqui...'
              {...firstName}
            />
            <Input
              label='Last Name'
              type='text'
              name='loginLastName'
              placeholder='Digite seu sobrenome aqui...'
              {...lastName}
            />
            <Input
              label='Password'
              type='password'
              name='loginPassword'
              placeholder='Digite sua senha aqui...'
              {...password}
            />
            <Input
              label='Country'
              type='text'
              name='loginCountry'
              placeholder='Digite seu país aqui...'
              {...country}
            />

            <div className='login-check'>
              <input type='checkbox' name='accept' id='acceptTerms' />
              <label htmlFor='acceptTerms'>
                I accept the Privacy Policy and the Terms of Service
              </label>
            </div>

            <div className='button mt-5'>
              <Button color='secondary'>Sign Up</Button>

              <small className='todo'>
                todo: verify inputs, if ok show password input, todo: fix email
                validation
              </small>
            </div>
          </form>

          <div className='login-right-side--new-account mt-8'>
            Have an account?
            <Link to='/login'>
              <span>Log in</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
