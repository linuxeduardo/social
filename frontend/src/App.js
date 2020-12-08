import { Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import Home from './components/Home';
import Friends from './components/Friends';
import Navigation from './components/Navigation';
import Messages from './components/Messages';
import ProtectedRoute from './helpers/ProtectedRoute';

function App() {
  return (
    <div className='App container'>
      <div className='Nav'>
        <Navigation />
      </div>
      <div className='Main'>
        <Switch>
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <ProtectedRoute path='/profile' component={Profile} />
          <Route path='/messages' component={Messages} />
          <Route exact path='/' component={Home} />
          <Route exact path='/friends' component={Friends} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
