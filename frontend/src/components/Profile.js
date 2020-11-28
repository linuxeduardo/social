import React from 'react';
import ProfileFields from './ProfileFields';

const Profile = () => {
  return (
    <div className='profile'>
      <div className='container'>
        <div className='profile-username'>username</div>
        <ProfileFields label='username' />
        <ProfileFields label='email' />
        <ProfileFields label='old-password' />
        <ProfileFields label='new-password' />
        <button className='button button-red'>Salvar</button>
      </div>
    </div>
  );
};

export default Profile;
