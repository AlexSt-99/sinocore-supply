import React from 'react';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import About from '../components/About';
import SanctionedComponents from '../components/SanctionedComponents';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Services />
      <SanctionedComponents />
    </div>
  );
};

export default Home;