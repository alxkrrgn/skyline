import React from 'react';
import ReactPlayer from 'react-player';

const VideoBgStars = () => {
  return (
    <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
      <ReactPlayer
        url={`${process.env.PUBLIC_URL}/videos/176986-856259237.mp4`} 
        playing
        loop
        muted
        width="100%"
        height="100%"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          objectFit: 'cover',  // to make it cover the screen
        }}
      />
      <div style={{ position: 'relative', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', 
      textAlign: 'center', justifyContent: 'middle'
       }}>
        <h1 style={{ color: 'white' }}>Skyline Capital</h1>
        <h2 style={{ color: 'white' }}>Your investing journey starts here</h2>
      <br />
      <button className="cta-button">Learn More</button>
    </div>
    </div>
  );
};

export default VideoBgStars;
