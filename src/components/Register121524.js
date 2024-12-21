
import React, { useState } from 'react';
import '../styles/style-loggedin.css';
import '../styles/loginform.css';
import '../styles/buttons.css';
import FormData from "form-data";

const Register = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        cpass: '',
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

        if (formData.password === '' || formData.cpass === '' ) {
            setServerMessage({ text: 'Please enter your password:', type: 'error' });
            return;
        }

        if (formData.password !== formData.cpass) {
            setServerMessage({ text: 'Passwords do not match:', type: 'error' });
            return;
        }

        try {
            const postData = new FormData();
            postData.append('email', formData.email);
            postData.append('password', formData.password);
            postData.append('cpass', formData.cpass);
        
            console.log('Post data:', Object.fromEntries(postData.entries()));
        
            const response = await fetch('http://localhost/register.php', {
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
                    setServerMessage({ text: `Success: ${data.message}`, type: 'success' });
                    setFormData({ email: '', password: '', cpass: '' });
            } else {
                    setServerMessage({ text: `Error: ${data.error}`, type: 'error' });
                    }
            } catch (error) {
                    console.error('Error in fetch or processing:', error);
                    setServerMessage({ text: 'An error occurred during registration.', type: 'error' });
                }
    
    };

    return (
    <div style ={{ margin : '5vh 0' }} >
        <div className="container">
            <div className="form">
                <div className="form-panel one">
                    <div className="form-header">
                        <h1 style={{ textShadow: 'none' }}>Register</h1>
                    </div>
                    <div className="form-content">
                       {/* <h3 className={serverMessage.type}>{serverMessage.text}</h3> */}
                        <div>
                            {serverMessage.type === 'success' ? (
                        <h3
                                className={serverMessage.type}
                                dangerouslySetInnerHTML={{ __html: serverMessage.text }}
                        ></h3>
                            ) : (
                        <h3 className={serverMessage.type}>{serverMessage.text}</h3>
                                )}
                        </div>
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
                                <h3 className={validationMessage.type}>{validationMessage.text}</h3>
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
                                <label htmlFor="cpass">Confirm Password</label>
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
                                <button type="submit">Register</button>
                            </div>

                            <div className="form-group">
                                <label className="form-remember">
                                    <input type="checkbox" /> Remember Me
                                </label>
                                <a className="form-recovery" href="/login">
                                    Forgot Password?
                                </a>
                                <a className="form-recovery" href="/login">
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
    </div>
    );
};

export default Register;

