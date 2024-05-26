import React, { useState } from 'react';
import './Navbar.css';
import odross from '../images/odross.svg';
import { Link } from 'react-router-dom'; // Import Link component


function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform search logic here
    console.log('Search term:', searchTerm);
    // You can call a search function or update a state to trigger a search in another component
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src={odross} alt="Logo" />
      </div>
      <div className="nav-links">
        <a href="#Home" className="nav-button">Home</a>
        <a className="nav-button"><Link to='/Login1' className="nav-button">Courses</Link></a>        
        <a href="#contact-footer" className="nav-button">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;