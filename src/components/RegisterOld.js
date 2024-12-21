import React, { useState } from 'react';
import axios from 'axios';
import '../styles/style-loggedin.css';
import '../styles/loginform.css';
import '../styles/buttons.css';

const Register = () => {

    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
        };

  const validate = () => {
    const $result = $('#result');
    const email = $('#email').val();
    $result.text('');

    if (validateEmail(email)) {
      $result.text(email + ' is valid.');
      $result.removeClass('error').addClass('success');
            } else {
      $result.text(email + ' is invalid.');
      $result.removeClass('success').addClass('error');
          }
    //if(validateEmail(email)){
      //$result.text(email + ' is valid email');
      //$result.css('color', 'green');
        //	} else{
      ///$result.text(email + ' is invalid email');
      //$result.css('color', 'red');
    //	}
    return false;
  }
    $('#email').on('input', validate);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        cpass: '',
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/register', formData);
            if (response.data.success) {
                setMessage(`Success: ${response.data.success}`);
            } else {
                setMessage(`Error: ${response.data.error}`);
            }
        } catch (error) {
            setMessage('An error occurred during registration.');
        }

    };

    return (
        <div className="container">
            <div className="form">
                <div className="form-panel one">
                    <div className="form-header">
                        <h1 style={{ textShadow: 'none' }}>Register</h1>
                    </div>
                    <div className="form-content">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email..."
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <p id="result">{message}</p>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Password..."
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cpassword">Confirm Password</label>
                                <input
                                    type="password"
                                    id="cpass"
                                    name="cpass"
                                    placeholder="Confirm Password..."
                                    value={formData.cpass}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <button type="submit" id="submit">
                                    Register
                                </button>
                            </div>
                            <div className="form-group">
                                <label className="form-remember">
                                    <input type="checkbox" /> Remember Me
                                </label>
                                <a className="form-recovery" href="forgot.php">
                                    Forgot Password?
                                </a>
                                <a className="form-recovery" href="index.php">
                                    Already have an account? Login here
                                </a>
                            </div>
                            <div className="line">
                            <div className="form-group">
                                <button onClick={() => (window.location.href = '/auth/facebook')}>Login with Facebook</button>
                            </div>    
                            <div className="form-group">
                                <button onClick={() => (window.location.href = '/auth/google')}>Login with Google</button>
                            </div>
                            <div className="form-group">
                                <button onClick={() => (window.location.href = '/auth/twitter')}>Login with Twitter</button>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
