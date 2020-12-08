import React from 'react';
import '../css/profile.css';
import useForm from '../hooks/useForm';
import Input from './form/Input';
import Button from './form/Button';

const Profile = () => {
  const email = useForm();
  const name = useForm();
  const lastName = useForm();
  const password = useForm();
  const country = useForm();

  return (
    <div className='profile'>
      <div className='profile-left-side'>
        <div className='title serif'>
          <h3>Profile</h3>
        </div>
        <div className='profile-data'>
          <div className='profile-data--item'>
            <label htmlFor=''>username</label>
            <p>@jane_doe</p>
          </div>
          <div className='profile-data--item'>
            <label htmlFor=''>First Name</label>
            <p>Jane</p>
          </div>
          <div className='profile-data--item'>
            <label htmlFor=''>Last Name</label>
            <p>Doe</p>
          </div>
          <div className='profile-data--item'>
            <label htmlFor=''>Birthdate</label>
            <p>10/10/1999</p>
          </div>
        </div>
      </div>
      <div className='profile-right-side'>
        {/* form para atualizar */}
        <div className='title serif'>
          <h3>Update your profile</h3>
        </div>
        <div className='profile-edit'>
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
          <div className='mt-5'>
            <Button color='primary'>Update</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
