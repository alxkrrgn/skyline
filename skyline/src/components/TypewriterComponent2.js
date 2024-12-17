// TypewriterComponent.js
import React from 'react';
import Typewriter from 'react-typewriter-effect';

const TypewriterComponent2 = ({ strings, autoStart = true, loop = true, delay = 75, deleteSpeed = 50 }) => {
  return (
    <div style={{ padding: '20px', fontSize: '24px', fontFamily: 'Arial, sans-serif' }}>
      <Typewriter
        options={{
          strings: ['Welcome to Skyline', 'Explore the Future', 'Your Journey Starts Here'],
          autoStart: true,
          loop: true,
          delay: 75,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
};

export default TypewriterComponent2;
