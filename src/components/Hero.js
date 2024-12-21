import React from 'react';

const Hero = ({ backgroundImage }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%"
      }}
    ></div>
  );
};

export default Hero;
