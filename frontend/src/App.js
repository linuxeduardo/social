import { Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import Home from './components/Home';
import Friends from './components/Friends';
import Navigation from './components/Navigation';

function App() {
  return (
    <div>
      <div className='App'>
        <Navigation />
      </div>
      <div className='Main'>
        <Switch>
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/profile' component={Profile} />
          <Route exact path='/' component={Home} />
          <Route exact path='/friends' component={Friends} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
