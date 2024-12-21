// src/components/Header.js
//import React from 'react';
import React, { useEffect } from 'react';
import '../styles/Header.css';  // Import the Less file
import '../styles/navbar.css';  // Import the Less file

const Header = () => {
  useEffect(() => {
    const pageHeader = document.querySelector(".page-header");
    const openMobMenu = document.querySelector(".open-mobile-menu");
    const closeMobMenu = document.querySelector(".close-mobile-menu");
    const toggleSearchForm = document.querySelector(".search");
    const searchForm = document.querySelector(".page-header form");
    const topMenuWrapper = document.querySelector(".top-menu-wrapper");
    const isVisible = "is-visible";
    const showOffCanvas = "show-offcanvas";
    const noTransition = "no-transition";
    let resize;

    if (openMobMenu) {
      openMobMenu.addEventListener("click", () => {
        topMenuWrapper.classList.add(showOffCanvas); // Show mobile menu
      });
    }

    if (closeMobMenu) {
      closeMobMenu.addEventListener("click", () => {
        topMenuWrapper.classList.remove(showOffCanvas); // Hide mobile menu
      });
    }

    if (toggleSearchForm) {
      toggleSearchForm.addEventListener("click", () => {
        searchForm.classList.toggle(isVisible);
      });
    }

    // Handle window resize to disable transition during resizing
    const handleResize = () => {
      pageHeader.querySelectorAll("*").forEach((el) => {
        el.classList.add(noTransition);
      });
      clearTimeout(resize);
      resize = setTimeout(resizingComplete, 500);
    };

    const resizingComplete = () => {
      pageHeader.querySelectorAll("*").forEach((el) => {
        el.classList.remove(noTransition);
      });
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      if (openMobMenu) {
        openMobMenu.removeEventListener("click", () => {
          topMenuWrapper.classList.add(showOffCanvas);
        });
      }
      if (closeMobMenu) {
        closeMobMenu.removeEventListener("click", () => {
          topMenuWrapper.classList.remove(showOffCanvas);
        });
      }
      if (toggleSearchForm) {
        toggleSearchForm.removeEventListener("click", () => {
          searchForm.classList.toggle(isVisible);
        });
      }
    };
  }, []);

  return (
    <header className="page-header">
  <nav>
    <button aria-label="Open Mobile Menu" className="open-mobile-menu fa-lg">
      <i className="fas fa-bars" aria-hidden="true" />
    </button>
    <a href="">
      <img
        className="logo horizontal-logo"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/horizontal-logo.svg"
        alt="forecastr logo"
      />
      <img
        className="logo vertical-logo"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/vertical-logo.svg"
        alt="forecastr logo"
      />
    </a>
    <div className="top-menu-wrapper">
      <div className="panel panel1" />
      <div className="panel panel2" />
      <ul className="top-menu">
        <li className="mob-block">
          <img
            className="logo"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/horizontal-logo-mobile.svg"
            alt="forecastr horizontal mobile logo"
          />
          <button
            aria-label="Close Mobile Menu"
            className="close-mobile-menu fa-lg"
          >
            <i className="fas fa-times" aria-hidden="true" />
          </button>
        </li>
        <li>
          <a href="">Product</a>
        </li>
        <li>
          <a href="">Solutions</a>
        </li>
        <li className="has-dropdown">
          <a href="">
            Why forecastr
            <i className="fas fa-chevron-down" />
          </a>
          <ul className="sub-menu">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Partners</a>
            </li>
            <li>
              <a href="">Success Stories</a>
            </li>
            <li>
              <a href="">Testimonials</a>
            </li>
          </ul>
        </li>
        <li className="has-dropdown">
          <a href="">
            Contact
            <i className="fas fa-chevron-down" />
          </a>
          <ul className="sub-menu">
            <li>
              <a href="">Request a Demo</a>
            </li>
            <li>
              <a href="">Send an Email</a>
            </li>
          </ul>
        </li>
        <li>
          <ul className="socials">
            <li>
              <a href="">
                <span className="fa-stack fa-2x">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-facebook fa-stack-1x fa-inverse" />
                </span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="fa-stack fa-2x">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-twitter fa-stack-1x fa-inverse" />
                </span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="fa-stack fa-2x">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-instagram fa-stack-1x fa-inverse" />
                </span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="fa-stack fa-2x">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-youtube fa-stack-1x fa-inverse" />
                </span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <button className="search">
        <i className="fas fa-search fa-lg" />
        <span>Search Resources</span>
      </button>
      <form className="search-form">
        <div>
          <input type="search" placeholder="Search Resources" />
          <button aria-label="Search Resources" type="submit">
            <i className="fas fa-search fa-2x" aria-hidden="true" />
          </button>
        </div>
      </form>
    </div>
  </nav>
</header>

  );
};

export default Header;
