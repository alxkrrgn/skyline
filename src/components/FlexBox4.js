// src/components/FlexBox.js
import React from 'react';

const FlexBox4 = ({ children, backgroundColor = '#673AB7' }) => {
  const boxStyle = {
flex: '1 1 47%',
maxWidth: '47%',
minWidth: '200px',
  padding: '20px',
  margin: '10px', // Space between boxes
  backgroundColor: backgroundColor,
  color: 'white',
  textAlign: 'center',
  borderRadius: '8px',
  boxSizing: 'border-box',
  position: 'relative', // Prevent unintended absolute positioning
  overflow: 'hidden',  // Prevent content overflow
  
  };

  return <div style={boxStyle}>{children}</div>;
};

export default FlexBox4;