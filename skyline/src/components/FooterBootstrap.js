import React from 'react';
import '../styles/BootstrapFooter.scss';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaPhone, FaComments, FaEnvelope, FaStar } from 'react-icons/fa';

const FooterBootstrap = () => {

  return (
    
    <footer>
      <div className="container">
        <div className="row">
          {/* Product Section */}
          <div className="col-md-4 footer-column">
            <ul className="nav flex-column">
              <li className="nav-item">
                <span className="footer-title">Product</span>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Product 1</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Product 2</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Plans & Prices</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Frequently Asked Questions</a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="col-md-4 footer-column">
            <ul className="nav flex-column">
              <li className="nav-item">
                <span className="footer-title">Company</span>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Job Postings</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">News and Articles</a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 footer-column">
            <ul className="nav flex-column">
              <li className="nav-item">
                <span className="footer-title">Contact & Support</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">
                  <FaPhone /> +47 45 80 80 80
                </span>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FaComments /> Live Chat
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FaEnvelope /> Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FaStar /> Give Feedback
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="text-center">
          <i className="fas fa-ellipsis-h"></i>
        </div>

        {/* Footer Bottom Row */}
        <div className="row text-center">
          {/* Copyright Section */}
          <div className="col-md-4 box">
            <span className="copyright quick-links">
              Copyright &copy; Your Website {new Date().getFullYear()}
            </span>
          </div>

          {/* Social Buttons */}
          <div className="col-md-4 box">
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#">
                  <FaTwitter />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <FaFacebook />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 box">
            <ul className="list-inline quick-links">
              <li className="list-inline-item">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Terms of Use</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBootstrap;

