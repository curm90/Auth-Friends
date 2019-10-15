import React, { useState } from 'react';
import withAuth from '../utils/withAuth';

const LoginForm = props => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = e => {
    e.preventDefault();
    withAuth()
      .post('http://localhost:5000/api/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        props.history.push('/friends');
      })
      .catch(err => {
        console.log(err.response.data.error);
        setCredentials({ username: '', password: '' });
      });
  };
  return (
    <div className='login-container'>
      <form className='login-form' onSubmit={handleLogin}>
        <input
          type='text'
          onChange={handleInputChange}
          value={credentials.username}
          placeholder='Username'
          name='username'
        />
        <input
          type='password'
          onChange={handleInputChange}
          value={credentials.password}
          placeholder='Password'
          name='password'
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
