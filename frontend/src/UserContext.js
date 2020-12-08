import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  GET_USER,
  POST_LOGIN,
  POST_NEW_USER,
  POST_VALIDATE_TOKEN
} from './api/api';
import useFetch from './hooks/useFetch';
export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  /* eslint-disable */
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [messages, setMessages] = React.useState(null);
  const [users, setUsers] = React.useState(null);
  const navigate = useHistory();
  const { request, fetchError } = useFetch();
  /* eslint-enable */

  async function getUser(token) {
    try {
      const { url, options } = GET_USER(token);
      const response = await fetch(url, options);
      const json = await response.json();
      setData(json);
      setLogin(true);
    } catch (err) {
      console.warn(err.message);
    }
  }

  // - - - - - - - - - - - register - - - - - - - - - - - - -
  async function userRegister(name, email, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = POST_NEW_USER({ name, email, password });
      const response = await fetch(url, options);

      await response.json();
      navigate.push('/login');
    } catch (err) {
      setError(err.message);
      setLogin(false);
      console.warn(err.message);
    } finally {
      setLoading(false);
    }
  }

  // - - - - - - - - - - - log in - - - - - - - - - - - - -
  async function userLogin(email, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = POST_LOGIN({ email, password });
      const response = await fetch(url, options);

      if (!response.ok) throw new Error(`Error: ${response.statusText}`);
      const json = await response.json();
      window.localStorage.setItem('token', json.token);

      // await getUser(token);
      setLogin(true);
      navigate.push('/');
    } catch (err) {
      setError(err.message);
      setLogin(false);
      console.warn(err);
    } finally {
      setLoading(false);
    }
  }

  // - - - - - - - - - - - log out - - - - - - - - - - - - -
  const userLogout = React.useCallback(
    async function () {
      setData(null);
      setError(null);
      setLoading(null);
      setLogin(null);
      window.localStorage.removeItem('token');
      navigate.push('/');
    },
    [navigate]
  );

  // - - - - - - - - - - - auto login - - - - - - - - - - - - -
  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setError(null);
          setLoading(true);

          const { url, options } = POST_VALIDATE_TOKEN(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error('Token inválido.');
          await getUser(token);
        } catch (err) {
          console.log(err);
          userLogout();
        } finally {
          setLoading(false);
        }
      }
    }
    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{
        getUser,
        userRegister,
        userLogin,
        setError,
        error,
        loading,
        login,
        data,
        userLogout
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
