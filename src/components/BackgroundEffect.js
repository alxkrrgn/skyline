import React, { useEffect, useRef } from 'react';

const BackgroundEffect = () => {
  const canvasRef = useRef(null); // Reference to the canvas element

  useEffect(() => {
    // Initialize variables
    const maxx = document.body.clientWidth;
    const maxy = document.body.clientHeight;
    const halfx = maxx / 2;
    const halfy = maxy / 2;
    const dotCount = 200;
    const dots = [];

    // Create and set up canvas
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.width = maxx;
    canvas.height = maxy;
    const context = canvas.getContext('2d');
    canvasRef.current = canvas;

    // Dot class
    function Dot() {
      this.rad_x = 2 * Math.random() * halfx + 1;
      this.rad_y = 1.2 * Math.random() * halfy + 1;
      this.alpha = Math.random() * 360 + 1;
      this.speed = Math.random() * 100 < 50 ? 1 : -1;
      this.speed *= 0.1;
      this.size = Math.random() * 5 + 1;
      this.color = Math.floor(Math.random() * 256);
    }

    // Draw the dot
    Dot.prototype.draw = function() {
      const dx = halfx + this.rad_x * Math.cos((this.alpha / 180) * Math.PI);
      const dy = halfy + this.rad_y * Math.sin((this.alpha / 180) * Math.PI);
      context.fillStyle = `rgb(${this.color}, ${this.color}, ${this.color})`;
      context.fillRect(dx, dy, this.size, this.size);
    };

    // Move the dot
    Dot.prototype.move = function() {
      this.alpha += this.speed;
      this.color += Math.random() * 100 < 50 ? 1 : -1;
    };

    // Create dots
    for (let i = 0; i < dotCount; i++) {
      dots.push(new Dot());
    }

    // Render loop
    function render() {
      context.fillStyle = '#000000';
      context.fillRect(0, 0, maxx, maxy);
      dots.forEach(dot => {
        dot.draw();
        dot.move();
      });
      requestAnimationFrame(render);
    }

    // Start animation
    render();

    // Cleanup function to remove the canvas when the component unmounts
    return () => {
      canvas.remove();
    };
  }, []); // Empty dependency array so this runs only once when the component mounts

  return null; // This component doesn't render anything in the DOM
};

export default BackgroundEffect;
