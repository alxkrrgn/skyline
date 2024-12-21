import React from 'react';
import FlexBox from './FlexBox';
import { Link } from 'react-router-dom';

const FlexBoxStockOptions = () => {
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
          <h2>Long/Short Call</h2>
        </FlexBox>
        <FlexBox backgroundColor="#006400">
          <h2>Long/Short Put</h2>
        </FlexBox>
        <FlexBox backgroundColor="#000045">
          <h2>Covered Call </h2>
        </FlexBox>
        <FlexBox backgroundColor="#450000">
          <h2>Long/Short Verticals</h2>
        </FlexBox>
        <FlexBox backgroundColor="#006400">
          <h2>Long/Short Calendars</h2>
        </FlexBox>
        <FlexBox backgroundColor="#000045">
          <h2>Long Straddle</h2>
        </FlexBox>
        <FlexBox backgroundColor="#450000">
          <h2>Short Strangle</h2>
        </FlexBox>
        <FlexBox backgroundColor="#006400">
          <h2>Condors/Ratios</h2>
        </FlexBox>
        <FlexBox backgroundColor="#000045">
          <h2>Combo/Synthetic</h2>
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
      <Link to="/stock-options">
        <button
          className="button-81"
          // data-aos="fade-in"
          // data-aos-duration={1000}
        >
          Learn Stock Options
        </button>
      </Link>
      </div>
    </>
  );
};

export default FlexBoxStockOptions;

