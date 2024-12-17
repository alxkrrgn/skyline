import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css'; // Import the default CSS

const Locomotive = () => {

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('#main'), // The element you want to apply scrolling to
      smooth: true, // Enable smooth scrolling
      inertia: 0.2, // Adjust inertia (slower scroll speed for more smoothness)
    });

    // Cleanup on component unmount
    return () => scroll.destroy();
  }, []);

  return (
    <div id="main">
      <div data-scroll>
        <h1>Welcome to Locomotive Scroll</h1>
        <p>Scroll down to see smooth scrolling in action.</p>
      </div>

      <div data-scroll>
        <p>More content here...</p>
      </div>

      <div data-scroll>
        <p>Even more content...</p>
      </div>
    </div>
  );
}

export default Locomotive;
