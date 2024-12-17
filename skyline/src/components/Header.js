// src/components/Header.js
import React, { useEffect, useState } from 'react';
import '../styles/App.css'; // Import the CSS file for styling
import '../styles/HeaderHamburger.scss'; // Import the CSS file for styling
import NavigationMenu from './NavigationMenu';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null); // Track login state

  useEffect(() => {
    // Check if the user is logged in by checking local storage or session data
    const checkLoginStatus = () => {
      const userData = localStorage.getItem('userData');
      setIsLoggedIn(!!userData); // Convert to boolean

      if (userData) {
        isLoggedIn == true;
    }
    };

    checkLoginStatus(); // Initial check

    // Refresh menu when session starts or changes
    const handleStorageChange = () => {
        checkLoginStatus();
        };

      handleStorageChange(); // Secondary check

    const nav = document.querySelector('#nav');
    const menu = document.querySelector('#menu');
    const menuToggle = document.querySelector('.nav__toggle');
    let isMenuOpen = false;

    if (menuToggle && nav && menu) {
      // Toggle menu active state on click
      const toggleMenu = (e) => {
        e.preventDefault();
        isMenuOpen = !isMenuOpen;
        menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
        menu.hidden = !isMenuOpen;
        nav.classList.toggle('nav--open');
      };

      // Trap tab inside nav when open
      const trapTabKey = (e) => {
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
      };

      menuToggle.addEventListener('click', toggleMenu);
      nav.addEventListener('keydown', trapTabKey);

      // Cleanup event listeners on component unmount
      return () => {
        menuToggle.removeEventListener('click', toggleMenu);
        nav.removeEventListener('keydown', trapTabKey);
      };
    }
  
   // Refresh menu when session starts or changes
   window.addEventListener('storage', checkLoginStatus);

   return () => {
     window.removeEventListener('storage', checkLoginStatus);
   };

 }, []);

  const handleLogout = () => {
    localStorage.removeItem('userData');
    setIsLoggedIn(false);
    setTimeout(() => {
      navigate('/'); // Redirect to the dashboard
  }, 1000);
   // window.location.href = '/';
  };

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
        <NavigationMenu />
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



