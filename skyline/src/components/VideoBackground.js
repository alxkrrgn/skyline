// src/components/VideoBackground.js
import React from 'react';

const VideoBgPage = () => {
  return (
    <div style={styles.container}>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={styles.video}
        src={`${process.env.PUBLIC_URL}/videos/176986-856259237.mp4`}
      />
      <div style={styles.overlay}>
        {/* Any content you want to overlay on the video */}
        <h1 style={styles.text}>Welcome to Skyline Capital</h1>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
  },
  video: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transform: 'translate(-50%, -50%)',
    //zIndex: '-1', // Ensure video stays in the background
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  text: {
    fontSize: '2em',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  },
};

export default VideoBgPage;
