import React from 'react';
import ParticlesBackground from './ParticlesBackground';

const HeroSection = () => (
  <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
    <ParticlesBackground />
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <h1 style={{ color: 'white' }}>Welcome to Skyline Capital</h1>
    </div>
  </div>
);
export default HeroSection;