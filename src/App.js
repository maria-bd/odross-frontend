// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom'; // Import Routes
import Home from './pages/Home';
import Register from './components/Register';
import Login1 from './components/Login1';
import Login2 from './components/Login2';
import Login3 from './components/Login3';
import GradientBackground from './components/GradientBackground';
import Profile from './components/Profile'; // Assuming Profile component is defined
import EditProfile from './components/EditProfile'; // Assuming Profile component is defined


function App() {
  return (
    <Router>
      <div>
        <Routes> {/* Wrap Routes around your Route components */}
          <Route path="/" element={<Home />} />
          <Route path="/Login1" element={<GradientBackground><Login1 /></GradientBackground>} />
          <Route path="/Login2" element={<GradientBackground><Login2 /></GradientBackground>} />
          <Route path="/Register" element={<GradientBackground><Register /></GradientBackground>} />
          <Route path="/Profile" element={<GradientBackground><Profile /></GradientBackground>} />
          <Route path="/EditProfile" element={<GradientBackground><EditProfile /></GradientBackground>} />
          <Route path="/admin" element={<GradientBackground><Login3 /></GradientBackground>} />


          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
