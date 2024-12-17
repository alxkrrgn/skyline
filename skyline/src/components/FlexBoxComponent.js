// src/components/FlexBox.js
import React from 'react';

const FlexBox = ({ children, backgroundColor }) => {
  const boxStyle = {
    flex: '1 1 30%', // Flexible layout to take 30% of container width
    minWidth: '250px',
    padding: '20px',
    margin: '10px',
    backgroundColor: backgroundColor || '#673AB7',
    color: 'white',
    textAlign: 'center',
    borderRadius: '8px',
  };

  return <div style={boxStyle}>{children}</div>;
};

export default FlexBox;
