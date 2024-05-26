import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';
import odross from '../images/odross.svg';

function Navbar1() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={odross} alt="Logo" />
      </div>
      <div className="nav-links">
        {/* Replace anchor tags with Link components */}
        <Link to="/Profile" className="nav-button">Profile</Link>
        <Link to="/Leaderboard" className="nav-button">LeaderBoard</Link>
        <Link to="/Courses" className="nav-button">Courses</Link>
        <Link to="/QuizList" className="nav-button">Test</Link>
      </div>
    </div>
  );
}

export default Navbar1;
