import React from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../UserContext';
import Logo from './Logo';

const Navigation = () => {
  const { userLogout, login, data } = React.useContext(UserContext);
  // FIXME: react useFx check user logado
  const logout = async () => {
    await userLogout();
  };

  return (
    <nav className='menu'>
      <ul>
        <li>
          <Link to='/'>
            <Logo />
          </Link>
        </li>
        {login && (
          <>
            <li>
              <Link to='/profile'>
                <span>{data ? data.email : 'Profile'}</span>
              </Link>
            </li>
            <li>
              <Link to='/my-messages'>
                <span>My Messages</span>
              </Link>
            </li>
            <li>
              <Link to='/friends'>
                <span>Friends</span>
              </Link>
            </li>
          </>
        )}

        {!login && (
          <>
            <li>
              <Link to='/login'>
                <span>Login</span>
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <span>Register</span>
              </Link>
            </li>
          </>
        )}

        {login && (
          <li>
            <button className='button-logout' onClick={logout}>Log out</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
