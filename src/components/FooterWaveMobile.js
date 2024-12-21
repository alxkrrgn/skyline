import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const FooterWaveMobile = () => {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer">
        <div className="waves">
          <div className="wave" id="wave1" />
          <div className="wave" id="wave2" />
          <div className="wave" id="wave3" />
          <div className="wave" id="wave4" />
        </div>
        <ul className="social-icon">
          <li className="social-icon__item">
            <a className="social-icon__link" href="#">
            <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="#">
            <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="#">
            <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="#">
            <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
        <ul className="menu">
          <li className="menu__item">
            <a className="menu__link" href="../indexrdr.php">
              Home
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              Company
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="../strategies.php">
              Strategies
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="../getstarted.php">
              Get Started
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="../contactus.php">
              Contact
            </a>
          </li>
        </ul>
        <p>Copyright &copy; {currentYear} Skyline Capital | All Rights Reserved</p>
      </div>
      <div className="mobile-footer">
        <div className="footer-row">
          <div className="footer-col">
            <ul>
              <a className="active" href="#">
                <h4>Company</h4>
              </a>
              <a className="active" href="index.html">
                <h4>Home</h4>
              </a>
              <a href="index.html">
                <h4>Strategies</h4>
              </a>
              <a href="about.html">
                <h4>Contact</h4>
              </a>
              <a href="about.html">
                <h4>Get Started</h4>
              </a>
              <a href="/phploginsys/index.php">
                <h4>Login</h4>
              </a>
            </ul>
            <ul className="links">
              <li>
                <a href="#">Company</a>
              </li>
              <li>
                <a href="../indexrdr.php">Home</a>
              </li>
              <li>
                <a href="../strategies.php">Strategies</a>
              </li>
              <li>
                <a href="../getstarted.php">Get Started</a>
              </li>
              <li>
                <a href="../contactus.php">Contact</a>
              </li>
              <li>
                <a href="phploginsys/index.php">Client Login</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul className="links">
              <li>
                <a href="#">Customer Agreement</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">GDPR</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">Media Kit</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Newsletter</h4>
            <p>
              Subscribe to our newsletter for a weekly dose of financial news,
              market updates, and helpful advice
            </p>
            <form action="#">
              <input type="text" placeholder="Your email" required />
              <button type="submit">SUBSCRIBE</button>
            </form>
            <div className="icons">

              <i className="fa-brands fa-facebook" />
              <i className="fa-brands fa-twitter" />
              <i className="fa-brands fa-linkedin" />
              <i className="fa-brands fa-github" />
  
            </div>
          </div>
        </div>
        <p>Copyright &copy; {currentYear} Skyline Capital | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default FooterWaveMobile;
