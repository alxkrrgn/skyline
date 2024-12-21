// src/App.js
import React from 'react';
import FlexBox from './FlexBox';
import VideoPlayer from './VideoReactPlayer';
import VideoBackground from './ReactPlayer';
import 'aos/dist/aos.css';

const FlexBoxContainer = () => {
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '90vw',
    margin: '10vh auto',             // Adds top and bottom spacing
    padding: '2rem',                 // Adds internal spacing for the container
    boxSizing: 'border-box', 
    justifyContent: 'space-between',  // Adds space between boxes
    boxSizing: 'border-box',  
    gap: '1rem',
  };

  return (
 
    <div style={containerStyle}>
        <FlexBox backgroundColor="#673AB7" >
          <img
  src= {`${process.env.PUBLIC_URL}/images/buildings-2699520_1920.jpg`}
  alt="HTML5 Icon"
  width="100%"
  height="100%"
  margin="20%"
/>
</FlexBox>
        <FlexBox backgroundColor="#368887" >
        <img
  src= {`${process.env.PUBLIC_URL}/images/new-york-3651503_1920.jpg`}
  alt="HTML5 Icon"
  width="100%"
  height="100%"
  margin="20%"
/>
</FlexBox>
        <FlexBox backgroundColor="#FF5722" >
        <img
  src= {`${process.env.PUBLIC_URL}/images/japan-217882_1920.jpg`}
  alt="HTML5 Icon"
  width="100%"
  height="100%"
  margin="20%"
/>
</FlexBox>
    </div>
  

  );
};

export default FlexBoxContainer;
