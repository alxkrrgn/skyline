import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "../styles/buttons.css";
import "../styles/App.css";
import { css } from '@emotion/react';

const FooterResponsive = () => {
  // Get the current year
  const currentYear = new Date().getFullYear();

   const [formData, setFormData] = useState({
          email: '',
          name: '',
          phonenumber: '',
          question: '',
      });
  
      const [validationMessage, setValidationMessage] = useState({ text: '', type: '' });
      const [serverMessage, setServerMessage] = useState({ text: '', type: '' });
  
      //const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
      const validateEmail = (email) => {
          return email.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
        };
  
      const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({ ...formData, [name]: value });
  
          if (name === 'email') {
              const isValid = validateEmail(value);
              setValidationMessage({
                  text: isValid ? 'Valid Email' : 'Invalid Email',
                  type: isValid ? 'success' : 'error',
              });
          }
      };
  
      const handleSubmit = async (e) => {
          e.preventDefault();
  
          if (formData.email === '' ) {
              setServerMessage({ text: 'Please enter your email:', type: 'error' });
              return;
          }
          
          formData.name = 'Subceribe to Newsletter';
          formData.question = 'Subceribe to Newsletter';
          formData.phonenumber = '212-555-5555';

          if (formData.name === '' ) {
            setServerMessage({ text: 'Please enter your name:', type: 'error' });
            return;
          }
  
          if (formData.question === '' ) {
              setServerMessage({ text: 'Please choose a question:', type: 'error' });
              return;
          }

          try {
              const postData = new FormData();
              postData.append('email', formData.email);
              postData.append('name', formData.name);
              postData.append('phonenumber', formData.phonenumber);
              postData.append('question', formData.question);
          
              console.log('Post data:', Object.fromEntries(postData.entries()));
  
  
              const response = await fetch('https://backend.skyline-wealth.com/getstartedGit.php', {
                  method: 'POST',
                  body: postData, // Let the browser handle Content-Type
              });
  
              console.log('Response status:', response.status);
          
               // Check for server-side errors
               if (!response.ok) {
                  console.error('Server returned an error:', response.statusText);
                  setServerMessage({ text: 'Server error occurred.', type: 'error' });
                  return;
              }
          
              // Parse JSON response
               // Parse JSON response
  
  
              const rawText = await response.text(); // Log raw response
              console.log('Raw response:', rawText);
  
              const data = JSON.parse(rawText); // Parse JSON
              console.log('Parsed response:', data);
  
              console.log('Response data:', data);
  
              if (data.success) {
                setServerMessage({ text: data.message, type: 'success' });
                /*
                localStorage.setItem('userData', JSON.stringify(data.userData));
                setTimeout(() => {
                    navigate(data.redirect); // Redirect to the dashboard
                }, 2000); */
              // if (data.redirect) {
             //   window.location.href = data.redirect; // Navigate to /dashboard
                    //    }
                 } else {
                     setServerMessage({ text: data.error, type: 'error' });
                 }
             } catch (error) {
                    console.error('Error:', error);
                     setServerMessage({
                    text: 'An error occurred during login.',
                    type: 'error',
               });
            }
          };

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
          <div className="footerAlert" >
                  {serverMessage.type === 'success' ? (
                    <h3 //css={responsiveStyle} //style ={{ width: '10vw', margin: '2vh 45vw' }} 
              
              className={serverMessage.type}
              dangerouslySetInnerHTML={{ __html: serverMessage.text }}
                ></h3>
                  ) : (
                   <h3 //css={responsiveStyle} //style ={{ width: '10vw', margin: '2vh 45vw' }} 
                      className={serverMessage.type}>{serverMessage.text}</h3>
                      )}
          </div>
            <h5>Subscribe to Newsletter</h5>
        
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email..."
                value={formData.email}
                onChange={handleChange}
              />
              <div className="footerAlert" >
              <h3 //css={responsiveStyle} //style ={{ width: '10vw', margin: '2vh 45vw' }} 
              className= {validationMessage.type}>{validationMessage.text}</h3>
              </div>
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
                <a href="/">
                  home
                </a>
              </li>
              <li>
                <a href="/about">
                  about
                </a>
              </li>
              <li>
                <a href="/strategies">
                  strategies
                </a>
              </li>
              <li>
                <a href="/contact">
                  contact
                </a>
              </li>
              <li>
                <a href="/">
                  privacy
                </a>
              </li>
              <li>
                <a href="/">
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
