import React from 'react';
import ReactPlayer from 'react-player';

const VideoBackground = () => {
  return (
    <div style={{ position: 'relative', height: '100vh', width: '100%' }} className="video-container">
      <ReactPlayer
        url={`${process.env.PUBLIC_URL}/videos/BlueStocks204306-923909642_small.mp4`} 
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
        {/*<h1 style={{ color: 'white' }}>Skyline Capital</h1>*/}
        <h2 style={{ color: 'white' }}>Investing Solutions for All</h2>
      <br />
      <button className="button-81" data-aos="fade-in" data-aos-duration={1000}>Learn More</button>
    </div>
    </div>
  );
};

export default VideoBackground;
