import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import UserList from '../components/UserList';
import Footer from '../components/Footer';



const Home = () => {
  return (
    <div>
      <Navbar />
      <UserList />
      <HeroSection />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
