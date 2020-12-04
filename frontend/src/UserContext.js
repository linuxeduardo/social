import React from 'react';
import { useHistory } from 'react-router-dom';
import { GET_USER, POST_NEW_USER } from './api/api';
export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [messages, setMessages] = React.useState(null);
  const [users, setUsers] = React.useState(null);
  const navigate = useHistory();

  async function getUser(token) {
    try {
      const { url, options } = GET_USER(token);
      const response = await fetch(url, options);
      const json = await response.json();
      setData(json);
      setLogin(true);
    } catch (error) {
      console.log(error);
    }
  }

  // - - - - - - - - - - - register - - - - - - - - - - - - -
  async function userRegister(firstName, email, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = POST_NEW_USER({ firstName, email, password });
      await fetch(url, options);
      // FIXME: user already exists
      navigate.push('/login');
    } catch (err) {
      setError(err.message);
      setLogin(false);
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <UserContext.Provider
      value={{
        getUser,
        userRegister
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
