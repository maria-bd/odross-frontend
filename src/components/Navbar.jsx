import React from 'react';
import './Navbar.css';
import odross from '../images/odross.png';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={odross} alt="Logo" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Write text to seach.." />
        <button type="submit">Search</button>
      </div>
      <div className="nav-links">
        <a href="#" className="nav-button">Home</a>
        <a href="#" className="nav-button">Courses</a>
        <a href="#" className="nav-button">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
