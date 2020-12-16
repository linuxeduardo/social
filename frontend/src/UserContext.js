import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  GET_ALL_MESSAGES,
  GET_USER,
  POST_LOGIN,
  POST_NEW_MESSAGE,
  POST_NEW_USER,
  POST_VALIDATE_TOKEN,
  GET_ALL_MESSAGES_BY_USER
} from './api/api';
import useFetch from './hooks/useFetch';
export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  /* eslint-disable */
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [messages, setMessages] = React.useState([]);
  const [messagesByUser, setMessagesByUser] = React.useState([]);
  const [users, setUsers] = React.useState(null);
  const navigate = useHistory();
  const { request, fetchError } = useFetch();
  //
  const [messageData, setMessageData] = React.useState(null);
  /* eslint-enable */

  async function getUser(token) {
    try {
      setLoading(true);
      const { url, options } = GET_USER(token);
      const response = await fetch(url, options);
      const json = await response.json();
      setData(json);
      setLogin(true);
    } catch (err) {
      console.warn(err.message);
    } finally {
      setLoading(false);
    }
  }

  // - - - - - - - - - - - register - - - - - - - - - - - - -
  async function userRegister(name, email, password) {
    let json = '';
    try {
      setError(null);
      setLoading(true);

      const { url, options } = POST_NEW_USER({ name, email, password });
      const response = await fetch(url, options);
      json = response.json();
      await response.json();
      navigate.push('/login');
    } catch (err) {
      setError(json.message);
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
      window.localStorage.setItem('token', json.token); // TODO: get message

      const token = window.localStorage.getItem('token');
      await getUser(token);
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

  // - - - - - - - - - - - new message - - - - - - - - - - - - -
  async function newMessage(content, token) {
    let json = '';
    try {
      setError(null);
      setLoading(true);
      const { url, options } = POST_NEW_MESSAGE({ content }, token);
      // content > {content} unexpected json
      const response = await fetch(url, options);
      json = await response.json();
      // -----------------////
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      // FIXME: get message from node
    } catch (err) {
      setError(json.message);
      setLogin(false);
      // FIXME: re login
    } finally {
      setLoading(false);
    }
  }
  // - - - - - - - - - - - auto login - - - - - - - - - - - - -
  React.useEffect(() => {
    async function autoLogin() {
      let json = '';
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setError(null);
          setLoading(true);

          const { url, options } = POST_VALIDATE_TOKEN(token);
          const response = await fetch(url, options);
          json = await response.json();
          if (!response.ok) throw new Error('Token inválido.');
          await getUser(token);
        } catch (err) {
          setError(json.message);
          userLogout();
        } finally {
          setLoading(false);
        }
      }
    }
    autoLogin();
  }, [userLogout]);

  async function messageDataByUser() {
    let json = '';
    try {
      setError(null);
      setLoading(true);

      const token = window.localStorage.getItem('token');
      const { url, options } = GET_ALL_MESSAGES_BY_USER(token);
      const response = await fetch(url, options);
      json = await response.json();

      if (!response.ok) throw new Error(`Error: ${response.statusText}`);
      setMessagesByUser(json);
    } catch (err) {
      setError(json.message);
    } finally {
      setLoading(false);
    }
  }

  async function fetchData() {
    let json = '';
    try {
      setError(null);
      setLoading(true);
      const { url, options } = GET_ALL_MESSAGES();
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Error: ${response.statusText}`);
      json = await response.json();
      setMessageData(json);
    } catch (err) {
      setError(json.message);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    fetchData();

    setTimeout(() => {
      console.log(new Date());
    }, 1000 * 60 * 60);
  }, [login]);

  return (
    <UserContext.Provider
      value={{
        getUser,
        userRegister,
        userLogin,
        error,
        loading,
        login,
        data,
        userLogout,
        newMessage,
        messageData,
        fetchData,
        messagesByUser,
        messageDataByUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
