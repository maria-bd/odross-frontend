// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes> {/* Wrap Routes around your Route components */}
          <Route path="/" element={<HeroSection />} />
          <Route path="/login" element={<Login />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
