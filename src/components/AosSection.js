import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS for animations to work

const AosSection = () => {
  
  return (

    <section>

    <button className="button-81" data-aos="flip-right" data-aos-duration={1000}>Flip Right</button>
    <button className="button-28" data-aos="flip-dwon" data-aos-duration={1000}>Flip Down</button>
    <button className="button-35" data-aos="flip-left" data-aos-duration={1000}>Flip Left</button>
    <button className="button-89" data-aos="flip-up" data-aos-duration={1000}>Flip Up</button>
    <button className="buttonRainbow" data-aos="fade-down">Button Rainbow</button>

  <h1>About Us</h1>
  <p>Some information about our company. AOS part </p>

<div data-aos="zoom-in" data-aos-delay={300}>
    <p>Zoom-in with delay</p>
  </div>
  <div data-aos="slide-up" data-aos-duration={1000}>
    
    <p>Slide-up with duration</p>
  </div>

<div data-aos="zoom-out" data-aos-delay={300}>
    <p>Zoom-out with delay </p>
  </div>
  <div data-aos="slide-left" data-aos-duration={1000}>
    <p>Slide-left with duration</p>
  </div>

  <div data-aos="slide-right" data-aos-duration={1000}>
    <p>Slide-right with duration</p>
  </div>

  <div data-aos="slide-up" data-aos-duration={1000}>
    <p>Slide-up with duration</p>
  </div>

  <div data-aos="slide-down" data-aos-duration={1000}>
    <p>Slide-down with duration</p>
  </div>

<div data-aos="flip-left" data-aos-delay={300}>
  <p>flip left with delay</p>
  </div>
  <div data-aos="flip-right" data-aos-duration={1000}>
  <p>flip right with duration</p>
  </div>

<div data-aos="flip-up" data-aos-delay={300}>
  <p>flip up with delay</p>
  </div>
  <div data-aos="flip-down" data-aos-duration={1000}>
  <p>flip down with duration</p>
  </div>

<div data-aos="fade-down" data-aos-delay={300}>
  <p>fade down with delay</p>
  </div>
  <div data-aos="fade-up" data-aos-duration={1000}>
  <p>fade up with duration</p>
  </div>

  <div data-aos="fade-right" data-aos-duration={1000}>
  <p>Fade-right with duration</p>
  </div>

  <div data-aos="fade-left" data-aos-duration={1000}>
  <p>Fade left  with duration</p>
  </div>

  </section>

)};

export default AosSection;