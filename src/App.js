// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom'; // Import Routes
//import Navbar from './components/Navbar';
//import HeroSection from './components/HeroSection';
import Register from './components/Register';
import Login1 from './components/Login1';
import Login2 from './components/Login2';
import Home from './pages/Home';
import GradientBackground from './components/GradientBackground';


function App() {
  return (
    <Router>
      <div>
        <Routes> {/* Wrap Routes around your Route components */}
          <Route path="/" element={<Home />} />
                <Route path="/login1" element={<GradientBackground><Login1 /></GradientBackground>} />
                <Route path="/login2" element={<GradientBackground><Login2 /></GradientBackground>} />
                <Route path="/register" element={<GradientBackground><Register /></GradientBackground>} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
