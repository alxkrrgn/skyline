// src/components/About.js
import React from 'react';
import '../styles/About.css'; // Import the CSS file specific to About component

function About() {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>
        Welcome to our website! We are a team of passionate developers working
        on building great web applications. Our mission is to create high-quality
        and user-friendly software that solves real-world problems.
      </p>
      <h2>Our Story</h2>
      <p>
        It all started with a simple idea: to help businesses grow by providing
        powerful, yet easy-to-use digital solutions. Since then, we’ve worked with
        a variety of clients and industries, and our team has expanded to include
        designers, engineers, and strategists.
      </p>
      <h2>Our Values</h2>
      <ul>
        <li>Innovation</li>
        <li>Collaboration</li>
        <li>Customer-centricity</li>
        <li>Excellence</li>
      </ul>
    </div>
  );
}

export default About;

