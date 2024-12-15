import React, { useEffect, useState } from 'react';
import "../styles/full-width-title.css";
import { useNavigate } from 'react-router-dom'; // Ensure React Router is set up

const FinancialDashboard = () => {
  
  const [userData, setUserData] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    
    useEffect(() => {
        const storedData = localStorage.getItem('userData');
        if (storedData) {
            setUserData(JSON.parse(storedData));
        } else {
            // Redirect to login if no session data is available
            window.location.href = '/login';
        }
    }, []);

    if (!userData) {
        return <div>Loading...</div>;
    }

  return (
   
  <div className="full-width-title">
    <h1>Financial Dashboard</h1>
    <h3>Username: {userData.username}</h3>
    <h3>Email: {userData.email}</h3>
  </div>

  );
};

export default FinancialDashboard;