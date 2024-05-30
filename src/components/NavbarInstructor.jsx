import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../Navbar.css';
import odross from '../../images/odross.svg';

function NavbarInstructor() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={odross} alt="Logo" />
      </div>
      <div className="nav-links">
        {/* Replace anchor tags with Link components */}
        <Link to="/AddQuiz" className="nav-button">Quiz</Link>
        <Link to="/Leaderboard" className="nav-button">Video</Link>
        <Link to="/Courses" className="nav-button">Lesson</Link>
        <Link to="/QuizList" className="nav-button">Profile</Link>
      </div>
    </div>
  );
}

export default NavbarInstructor;
