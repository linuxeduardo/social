import { Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import Home from './components/Home';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Switch>
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/profile' component={Profile} />
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
