import React from 'react';
import '../css/profile.css';
import useForm from '../hooks/useForm';
import Input from './form/Input';
import Button from './form/Button';
import UserContext from '../UserContext';
import Error from '../helpers/Error';
import { PUT_UPDATE_USER } from '../api/api';
import { useHistory } from 'react-router-dom';

const Profile = () => {
  const email = useForm();
  const name = useForm();
  const lastName = useForm();
  const password = useForm();
  const country = useForm();
  const { error, loading, login, data } = React.useContext(UserContext);
  // const navigate = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();

    const body = {
      email: email.value,
      name: name.value,
      password: password.value
    };
    if (data) {
      const token = window.localStorage.getItem('token');
      try {
        const { url, options } = await PUT_UPDATE_USER(token, data._id, body);
        await fetch(url, options);
        // navigate.go(0);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className='profile'>
      <div className='profile-left-side'>
        <div className='title serif'>
          <h3>Profile</h3>
        </div>
        <div className='profile-data'>
          <div className='profile-data--item'>
            <label htmlFor=''>username</label>
            <p>{data && data.email}</p>
          </div>
          <div className='profile-data--item'>
            <label htmlFor=''>First Name</label>
            <p>{data && data.name}</p>
          </div>
          <div className='profile-data--item'>
            <label htmlFor=''>Last Name</label>
            <p>Doe ---</p>
          </div>
          <div className='profile-data--item'>
            <label htmlFor=''>Birthdate</label>
            <p>10/10/1999 ---</p>
          </div>
        </div>
      </div>
      <div className='profile-right-side'>
        {/* form para atualizar */}
        <div className='title serif'>
          <h3>Update your profile</h3>
        </div>
        <div className='profile-edit'>
          <form onSubmit={handleSubmit}>
            <Input
              label='Email Address:'
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
              {...name}
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
              label='Password Again'
              type='password'
              name='loginPasswordAgain'
              placeholder='Digite novamente sua senha aqui...'
              {...password}
            />
            <Input
              label='Country'
              type='text'
              name='loginCountry'
              placeholder='Digite seu país aqui...'
              {...country}
            />

            <div className='button mt-5'>
              {loading ? (
                <Button disabled color='gray'>
                  Updating ..
                </Button>
              ) : (
                <Button color='secondary'>Update</Button>
              )}
            </div>
          </form>

          {error && (
            <div className='error'>
              <Error error={error} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
