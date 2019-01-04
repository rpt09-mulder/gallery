import React from 'react';
import './Nav.css';

const Nav = () => {

  return (
    <div className="nav-grid">
      <div className="nav-col logo"></div>
      <div className="nav-col search">
        <input type="text" value="search" />
      </div>
      <div className="nav-col nav">
        <ul id="menu">
          <li>Become a host</li>
          <li>Help</li>
          <li>Sign up</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  )
}

export default Nav;