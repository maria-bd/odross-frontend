import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import './HeroSection.css';
import heroImage1 from '../images/hero-banner-1.jpg';
import heroImage2 from '../images/hero-banner-2.jpg';
 import heroShape from '../images/blog-shape.png';
// import heroShape2 from '../images/hero-shape-2.png';
const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
          <h1>Ready to boost your coding skills ?</h1>
          <p>This platform is your best choice, join our learning courses and be ready to start a career in Computer Science ! </p>
        <div className='button'>
        <a href="#" className="button-link">ENROLL THE COURSES</a>
        </div> 
      </div>
      <div className="hero-container">
  <div className="right-components">
  <div className="hero3">
            <img src={heroShape} alt="Hero shape" className="hero-shape" />
          </div>
          <div className="hero1">         
            <img src={heroImage1} alt="Hero Image1" className="hero-image-1" />
          </div>
          <div className="hero2">
            <img src={heroImage2} alt="Hero Image2" className="hero-image-2" />
          </div>
  </div>
      </div>
      <p>Click the Log In button</p>
            <Link class='btn btn-primary btn-lg' to='/Login' role='button'>Login</Link>
    </div>
  );
};

export default HeroSection;