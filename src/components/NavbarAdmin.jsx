import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './NavbarAdmin.css';
import odross from '../../images/odross.svg';

function NavbarAdmin() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={odross} alt="Logo" />
      </div>
      <div className="nav-links">
        {/* Replace anchor tags with Link components */}
        <Link to="/Statistics" className="nav-button">Statistics</Link>
        <Link to="/admin" className="nav-button">Learners</Link>
        <Link to="/Teachers" className="nav-button">Teachers</Link>
        <Link to="/Update" className="nav-button">Updates</Link>
      </div>
    </div>
  );
}

export default NavbarAdmin;
