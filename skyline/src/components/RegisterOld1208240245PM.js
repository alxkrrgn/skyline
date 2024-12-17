import React, { useState } from 'react';
import axios from 'axios';
import '../styles/style-loggedin.css';
import '../styles/loginform.css';
import '../styles/buttons.css';

const Register = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        cpass: '',
    });

    const baseUrl = process.env.REACT_APP_BASE_URL || 'http://localhost';
    const [validationMessage, setValidationMessage] = useState({ text: '', type: '' });
    const [serverMessage, setServerMessage] = useState({ text: '', type: '' });

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

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
        if (formData.password !== formData.cpass) {
            setServerMessage({ text: 'Passwords do not match.', type: 'error' });
            return;
        }

        try {
            const response = await fetch(`${baseUrl}/register.php`, {
                method: 'POST',
                body: JSON.stringify(formData), // Convert formData to JSON string
                headers: {
                    'Content-Type': 'application/json', // Tell the server you're sending JSON
                },
            });
            const data = await response.json(); // Parse JSON from the response

            if (data.success) {
                setServerMessage({ text: `Success: ${data.message}`, type: 'success' });
                setFormData({ email: '', password: '', cpass: '' });
            } else {
                setServerMessage({ text: `Error: ${data.error}`, type: 'error' });
            }
            
            } catch (error) {
            console.error('Error:', error);
            setServerMessage({ text: 'An error occurred during registration.', type: 'error' });
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
                        <h3 className={serverMessage.type}>{serverMessage.text}</h3>
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
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;


