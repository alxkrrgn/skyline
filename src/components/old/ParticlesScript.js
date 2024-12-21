import React from 'react';
import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        particles: {
          number: { value: 100 },
          size: { value: 3 },
          move: { speed: 1 },
          opacity: { value: 0.5 },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" } },
        },
      }}
    />
  );
};

export default ParticlesBackground;
