import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <div className="nav-grid">
      <div className="nav-col logo">Logo</div>
      <div className="nav-col search">Search</div>
      <div className="nav-col nav">Navigation</div>
    </div>
  )
}

export default Nav;