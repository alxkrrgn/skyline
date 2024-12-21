// TypewriterComponent.js
import React from 'react';
import Typewriter from 'react-typewriter-effect';

const TypewriterComponent = ({ strings, autoStart = true, loop = true, delay = 75, deleteSpeed = 50 }) => {
  return (
    <div>
    <Typewriter
      textStyle={{ fontFamily: 'Red Hat Display' }}
      startDelay={100}
      cursorColor="white"
      text="Invest Smarter With Purpose & Plan Your Future"
      eraseSpeed={100}
      eraseDelay={2000}
      displayTextRenderer={(text, i) => {
        return (
          <h2 style={{ fontColor: 'white' }}>
            {text.split('').map((char, i) => {
              const key = `${i}`;
              return (
                <span key={key} style={{ color: i % 2 === 0 ? 'white' : 'whitesmoke' }}>
                  {char}
                </span>
              );
            })}
          </h2>
        );
      }}
    />
  </div>
  );
};

export default TypewriterComponent;
