import React from 'react';
import FlexBox from './FlexBox';

const FlexBoxStocks = () => {
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
          <h2>Buy and Hold</h2>
        </FlexBox>
        <FlexBox backgroundColor="#006400">
          <h2>Dividend Stocks</h2>
        </FlexBox>
        <FlexBox backgroundColor="#000045">
          <h2>Value Stocks</h2>
        </FlexBox>
        <FlexBox backgroundColor="#450000">
          <h2>Growth Stocks</h2>
        </FlexBox>
        <FlexBox backgroundColor="#006400">
          <h2>Short Selling</h2>
        </FlexBox>
        <FlexBox backgroundColor="#000045">
          <h2>Dollar-Cost Averaging</h2>
        </FlexBox>
        <FlexBox backgroundColor="#450000">
          <h2>Taking Profits</h2>
        </FlexBox>
        <FlexBox backgroundColor="#006400">
          <h2>Buying on Corrections</h2>
        </FlexBox>
        <FlexBox backgroundColor="#000045">
          <h2>Selling on Rallies</h2>
        </FlexBox>
      </div>

      {/* Second div: Centered content */}
      <div
        style={{
          position: 'relative',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}
      >
      {/*  <h2 style={{ color: 'white' }}>Investment Solutions For Everyone</h2> */}
        <button
          className="button-81"
          // data-aos="fade-in"
          // data-aos-duration={1000}
        >
          Learn Stocks & ETFs
        </button>
      </div>
    </>
  );
};

export default FlexBoxStocks;

