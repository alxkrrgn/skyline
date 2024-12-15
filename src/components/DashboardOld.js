// src/components/About.js
import React, { useEffect, useState } from 'react';
import '../styles/About.css'; // Import the CSS file specific to About component
import CardContainerDashboard from './CardContainerDashboard';
import FinancialDashboard from './FinancialDashboard';
import { useNavigate } from 'react-router-dom'; // Ensure React Router is set up

const Dashboard = () => {
    const [userData, setUserData] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSessionData = async () => {
            try {
                const response = await fetch('http://localhost/dashboard.php', {
                  method: 'GET',
                  credentials: 'include', // Include session cookies
                  headers: {
                      'Content-Type': 'application/json',
                  },
              });
                //const data = await response.json();

                const rawText = await response.text(); // Log raw response
                console.log('Raw response:', rawText);
    
                const data = JSON.parse(rawText); // Parse JSON
                console.log('Parsed response:', data);

                if (data.success) {
                    setUserData(data);
                } else {
                    setErrorMessage(data.message || 'Failed to fetch session data.');
                    navigate(data.redirect); // Redirect to the dashboard
                }
            } catch (error) {
                setErrorMessage('An error occurred while fetching session data.');
                console.error('Fetch error:', error);
            }
        };

        fetchSessionData();
    }, []);

    if (errorMessage) {
        return <div className="error-message">{errorMessage}</div>;
    }

    if (!userData) {
        return <div>Loading...</div>;
    }
  return (

    <>

    <section>

    <div className="dashboard">
            <h1>Welcome to the Dashboard</h1>
            <p><strong>Username:</strong> {userData.username}</p>
            <p><strong>Email:</strong> {userData.email}</p>
            {/* Avoid displaying password in production */}
            <p><strong>Password:</strong> {userData.password}</p>
        </div>

    <FinancialDashboard />
    <CardContainerDashboard />

    </section>

    </>

  );
}

export default Dashboard;

