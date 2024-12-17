import React from 'react';
import FlexBox from './FlexBox';

const FlexBoxStrategiesTopics = () => {
  const containerStyle = {
    display: 'flex',
    width: '90vw',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Adds space between boxes
    margin: '10vh auto',            // Adds top and bottom spacing
    padding: '2rem',                // Adds internal spacing for the container
    boxSizing: 'border-box',        // Ensures padding doesn’t increase total width
    gap: '1rem',
  };

  return (
    <>
      {/* First div: FlexBox strategies */}
      <div style={containerStyle}>
        <FlexBox backgroundColor="#450000">
          <h2>Stocks & ETFs</h2>
        </FlexBox>
        <FlexBox backgroundColor="#006400">
          <h2>Stock options</h2>
        </FlexBox>
        <FlexBox backgroundColor="#000045">
          <h2>Index Futures</h2>
        </FlexBox>
        <FlexBox backgroundColor="#450000">
          <h2>Fixed Income</h2>
        </FlexBox>
        <FlexBox backgroundColor="#006400">
          <h2>Futures Options</h2>
        </FlexBox>
        <FlexBox backgroundColor="#000045">
          <h2>Energy Futures </h2>
        </FlexBox>
        <FlexBox backgroundColor="#450000">
          <h2>Food Futures</h2>
        </FlexBox>
        <FlexBox backgroundColor="#006400">
          <h2>Precious Metals</h2>
        </FlexBox>
        <FlexBox backgroundColor="#000045">
          <h2>Currency Pairs</h2>
        </FlexBox>
      </div>

      {/* Second div: Centered content 
      <div
        style={{
          position: 'relative',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}
      >
      {/*  <h2 style={{ color: 'white' }}>Investment Solutions For Everyone</h2> 
        <button
          className="button-81"
          // data-aos="fade-in"
          // data-aos-duration={1000}
        >
          Learn More
        </button>
      </div> */}
    </>
  );
};

export default FlexBoxStrategiesTopics;

