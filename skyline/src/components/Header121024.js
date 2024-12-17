// src/components/Header.js
//import React from 'react';
import React, { useEffect } from 'react';
//import { Navbar, Nav, Container } from 'react-bootstrap';
//import '../styles/headerLess.css'; // Import the CSS file for styling
//import '../styles/App.css'; // Import the CSS file for styling
import '../styles/HeaderHamburger.scss'; // Import the CSS file for styling


const Header = () => {
  useEffect(() => {
    // Select the necessary elements
    const nav = document.querySelector('#nav');
    const menu = document.querySelector('#menu');
    const menuToggle = document.querySelector('.nav__toggle');
    let isMenuOpen = false;

    // Toggle menu active state on click
    menuToggle.addEventListener('click', (e) => {
      e.preventDefault();
      isMenuOpen = !isMenuOpen;

      // Toggle accessibility attributes and active class
      menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
      menu.hidden = !isMenuOpen;
      nav.classList.toggle('nav--open');
    });

    // Trap tab inside nav when open
    nav.addEventListener('keydown', (e) => {
      if (!isMenuOpen || e.ctrlKey || e.metaKey || e.altKey) {
        return;
      }

      const menuLinks = menu.querySelectorAll('.nav__link');
      if (e.keyCode === 9) {
        if (e.shiftKey) {
          if (document.activeElement === menuLinks[0]) {
            menuToggle.focus();
            e.preventDefault();
          }
        } else if (document.activeElement === menuToggle) {
          menuLinks[0].focus();
          e.preventDefault();
        }
      }
    });

    // Cleanup event listeners on component unmount
    return () => {
      menuToggle.removeEventListener('click', () => {});
      nav.removeEventListener('keydown', () => {});
    };
  }, []);

  return (

      <header className="header" role="banner">
        <div className="left-header">
          <div className="logo">
            <a href="/">
            <img 
              src={`${process.env.PUBLIC_URL}/images/logo-skyline.png`} 
              alt="Skyline Logo" 
              style={{ width: 220, height: 50 }} 
            />
            </a>
          </div>
        </div>
        <nav id="nav" className="nav" role="navigation">
          {/* ACTUAL NAVIGATION MENU */}
          <ul
            className="nav__menu"
            id="menu"
            tabIndex={-1}
            aria-label="main navigation"
            hidden=""
          >
            <li className="nav__item">
              <a href="/" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="/strategies" className="nav__link">
                Strategies
              </a>
            </li>
            <li className="nav__item">
              <a href="/contact" className="nav__link">
                Contact
              </a>
            </li>
            <li className="nav__item">
              <a href="/login" className="nav__link">
                Login
              </a>
            </li>
            <li className="nav__item">
              <a href="/register" className="nav__link">
                Register
              </a>
            </li>
            <li className="nav__item">
              <a href="/getstarted" className="nav__link">
                Get Started
              </a>
            </li>
          </ul>
          {/* MENU TOGGLE BUTTON */}
          <a
            href="#nav"
            className="nav__toggle"
            role="button"
            aria-expanded="false"
            aria-controls="menu"
          >
            <svg
              className="menuicon"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
              viewBox="0 0 50 50"
            >
              <title>Toggle Menu</title>
              <g>
                <line
                  className="menuicon__bar"
                  x1={13}
                  y1="16.5"
                  x2={37}
                  y2="16.5"
                />
                <line
                  className="menuicon__bar"
                  x1={13}
                  y1="24.5"
                  x2={37}
                  y2="24.5"
                />
                <line
                  className="menuicon__bar"
                  x1={13}
                  y1="24.5"
                  x2={37}
                  y2="24.5"
                />
                <line
                  className="menuicon__bar"
                  x1={13}
                  y1="32.5"
                  x2={37}
                  y2="32.5"
                />
                <circle className="menuicon__circle" r={23} cx={25} cy={25} />
              </g>
            </svg>
          </a>
          {/* ANIMATED BACKGROUND ELEMENT */}
          <div className="splash" />
        </nav>
      </header>
      
 

);
};

export default Header;
