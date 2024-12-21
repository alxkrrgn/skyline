// src/components/StarryBackground.js

import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const StarryBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: { value: "#000000" },
        },
        particles: {
          number: { value: 200 }, // Increase particle count
          color: { value: "#ffffff" }, // White color for visibility
          shape: { type: "circle" },
          opacity: {
            value: 0.7,
            random: true,
          },
          size: {
            value: 4, // Larger particle size for visibility
            random: { enable: true, minimumValue: 1 }
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            outModes: {
              default: "out",
            },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100 },
            push: { quantity: 4 },
          },
        },
      }}
    />
  );
};

export default StarryBackground;

