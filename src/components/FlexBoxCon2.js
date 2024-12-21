// src/App.js
import React from 'react';
import FlexBox from './FlexBox';
import VideoPlayer from './VideoReactPlayer';
import VideoBackground from './ReactPlayer';
import DynamicShowMore from './DynamicShowMore';

const FlexBoxCon2 = () => {
  const containerStyle = {
    display: 'flex',
    width: '90vw',
    flexWrap: 'wrap',
    justifyContent: 'space-between',  // Adds space between boxes
    margin: '10vh auto',             // Adds top and bottom spacing
    padding: '2rem',                 // Adds internal spacing for the container
    boxSizing: 'border-box',         // Ensures padding doesn’t increase total width
    gap: '1rem',
  };

  return (
    
    <div style={containerStyle}>
        <FlexBox backgroundColor="#673AB7">
        Invest Smarter<br />
    With Confidence<br />
    We provide excellent service
</FlexBox>
        <FlexBox backgroundColor="#368887">
        We Apply Diversity<br />
    Managed Risk<br />
    We offer great quality
</FlexBox>
        <FlexBox backgroundColor="#FF5722">
        Peace of Mind<br />
    In All Markets<br />
    Trust us to get the job done
</FlexBox>

    </div>

  );
};

export default FlexBoxCon2;

