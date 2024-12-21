import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Ensure React Router is set up

const NavigationMenu = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [redirectPending, setRedirectPending] = useState(false); // New state to control redirection
    const navigate = useNavigate();


    useEffect(() => {
        // Check if the user is logged in by looking for session data (e.g., in localStorage)
        const userData = localStorage.getItem('userData');
        setIsLoggedIn(!!userData);

        if (userData) {
            isLoggedIn == true;
        }
        
    }, []);

    const handleLogout = () => {
        // Clear session data and redirect to the home page
        localStorage.removeItem('userData');
        setIsLoggedIn(false);
        window.location.href = '/login';
    };

     // Handle loading state or render null if not initialized
     if (isLoggedIn === null) {
        return null; // Or a loading spinner if needed
    }

    useEffect(() => {
        if (isLoggedIn) {
            // Set a short delay to render the HTML before redirecting
            const timer = setTimeout(() => {
                setRedirectPending(true); // Trigger the redirection state
            }, 2000); // Adjust the delay as necessary
            return () => clearTimeout(timer);
        }
    }, [isLoggedIn]);

    useEffect(() => {
        if (redirectPending) {
            navigate('/dashboard');
        }
    }, [redirectPending, navigate]);

    /*
    useEffect(() => {
        if (isLoggedIn) {
            const timer = setTimeout(() => {
                navigate('/dashboard'); // Automatically navigate to Dashboard
            }, 2000); // Adjust delay as necessary
            return () => clearTimeout(timer);
        }
    }, [isLoggedIn, navigate]);

    */
    return (
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
            {isLoggedIn ? (
                <div>
                    <li className="nav__item">
                        <a href="/dashboard" className="nav__link">
                            Dashboard
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href='/login' onClick={handleLogout} className="nav__link nav__button">
                            Log Out
                        </a>
                    </li>
                </div>
            ) : (
               <div>
                    <li className="nav__item">
                        <a href="/register" className="nav__link">
                            Register
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="/login" className="nav__link">
                            Login
                        </a>
                    </li>
                </div>
            )}
            <li className="nav__item">
                <a href="/getstarted" className="nav__link">
                    Get Started
                </a>
            </li>
        </ul>
    );

};

export default NavigationMenu;
