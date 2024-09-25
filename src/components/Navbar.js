import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="path/to/logo.png" alt="Logo" />
        Integrated Automotive Services Ltd
      </div>
      <ul className="navbar-menu">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/activities">Activities</Link></li>
        <li><Link to="/assets">Assets</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/logout">Sign Out</Link></li>
      </ul>
      <div className="navbar-footer">
        <p>Welcome Michael Joshua</p>
        <button className="signout-btn">Sign Out</button>
      </div>
    </nav>
  );
}

export default Navbar;