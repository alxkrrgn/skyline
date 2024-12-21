import React from 'react';
import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "#000000 transparent" // Change to your preferred background color
          }
        },
        particles: {
          number: { value: 150 },
          size: { value: 5 },
          move: { speed: 3 },
          opacity: { value: 0.7 },
          color: { value: "#ffffff" }, // Set particle color
        },
        interactivity: {
          events: { 
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" }
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;

