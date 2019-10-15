import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Navigation = props => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    props.history.push('/');
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to='/'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/friends'>Friends</NavLink>
        </li>
        <li>
          <span onClick={handleLogout}>Logout</span>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(Navigation);
