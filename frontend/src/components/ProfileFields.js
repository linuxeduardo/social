import React from 'react';

const ProfileFields = ({ label }) => {
  return (
    <div className='profile-fields'>
      <div className='label'>{label}</div>
      <div className='input'>
        <input placeholder={label} type='text' />
      </div>
    </div>
  );
};

export default ProfileFields;
