import React from 'react';

const Profile = () => {
  return (
    <div>
      <h3>Profile</h3>
      <div>
        <label>username</label>
        <input type='text' />
        <label>email</label>
        <input type='email' />
        <label>data de nascimento</label>
        <input type='date' />
        <label>password</label>
        <input type='text' />
        <button>Registrar</button>
      </div>
    </div>
  );
};

export default Profile;
