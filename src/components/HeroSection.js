import React from 'react';
import Hero from './Hero';

const HeroSection = () => (
  <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
    <Hero />
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <h1 style={{ color: 'white' }}>Investing Solutions For All</h1>
    </div>
  </div>
);
export default HeroSection;