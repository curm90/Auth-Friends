import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import FriendsList from './components/FriendsList';
import LoginForm from './components/LoginForm';
import PrivateRoute from './components/PrivateRoute';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className='App'>
      hello world
      <Navigation />
      <Route exact path='/' component={LoginForm} />
      <PrivateRoute path='/friends' component={FriendsList} />
    </div>
  );
}

export default App;
