import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';
import odross from '../images/logo.svg';

function Navbar1() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={odross} alt="Logo" />
        <Link to="/Courses" className="nav-button">Return to course page</Link>
      </div>
      <div className="nav-links">
        {/* Replace anchor tags with Link components */}
      </div>
    </div>
  );
}

export default Navbar1;
