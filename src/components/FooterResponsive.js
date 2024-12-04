import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "../styles/buttons.css";

const FooterResponsive = () => {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    
    <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <div className="widget1">
           {/* <div className="logo">
              <img src="https://i.ibb.co/vLDyPtM/ak-logo-yellow.png" className="img-fluid" alt />
            </div>
            <p>
              In eu libero ligula. Fusce eget metus lorem, ac viverra
              leo. Nullam convallis, arcu vel pellentesque sodales,
              nisi est varius diam, ac ultrices sem ante quis sem.
              Proin ultricies volutpat sapien.
            </p> */}
            <div className="socialLinks">
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-google-plus-g" />
                  </a>
                </li>
                <li>
                  <a href="#">
                  <i className="fab fa-instagram instagram-icon"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="widget2">

            <h5>Subscribe to Newsletter</h5>
        
          <form action="#">
            <input type="text" placeholder="Your email" required />
            <button className='button-21' type="submit">SUBSCRIBE</button>
          </form>
           {/* <div className="media">
              <img className="img-fluid" src="https://i.ibb.co/CKNmhMX/blog1.jpg" alt />
              <div className="media-body d-flex align-self-center">
                <div className="content">
                  <a href="#">
                    <p>
                      Did son unreserved themselves indulgence its
                    </p>
                  </a>
                  <span>
                    Aug 17, 2019
                  </span>
                </div>
              </div>
            </div> 
            <div className="media">
              <img className="img-fluid" src="https://i.ibb.co/m5yGbdR/blog2.jpg" alt />
              <div className="media-body d-flex align-self-center">
                <div className="content">
                  <a href="#">
                    <p>
                      Rapturous am eagerness it as resolving household
                    </p>
                  </a>
                  <span>
                    Aug 17, 2019
                  </span>
                </div>
              </div>
            </div>
                */}
          </div>
        </div>
        <div className="col-sm-6 col-lg-2">
          <div className="widget3">
            <h5>
              Quick Links
            </h5>
            <ul>
              <li>
                <a href="#">
                  home
                </a>
              </li>
              <li>
                <a href="#">
                  about
                </a>
              </li>
              <li>
                <a href="#">
                  strategies
                </a>
              </li>
              <li>
                <a href="#">
                  contact
                </a>
              </li>
              <li>
                <a href="#">
                  privacy
                </a>
              </li>
              <li>
                <a href="#">
                  terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      {/*   <div className="col-sm-6 col-lg-2">
         <div className="widget4">
          
                
          </div> 
        </div> */}
      </div>
    </div>
    <div className="copyRightArea">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
          <a>Copyright &copy; {currentYear} Skyline Capital | All Rights Reserved</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  
  );
};

export default FooterResponsive;
