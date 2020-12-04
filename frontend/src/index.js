import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './css/reset.css';
import './css/base.css';
import './css/menu.css';
import { UserStorage } from './UserContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserStorage>
        <App />
      </UserStorage>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
