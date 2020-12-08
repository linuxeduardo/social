import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../UserContext';

const ProtectedRoute = props => {
  const { login } = React.useContext(UserContext);
  if (login) return <Route {...props} />;
  else if (login === false) return <Redirect to='/login' />;
  else return <Redirect to='/' />;
};
export default ProtectedRoute;
