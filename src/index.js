import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css'; // Import global styles (optional)
import App from './App'; // Import the main App component

ReactDOM.render(
  <App />,  // No Router here, App.js will handle routing
 document.getElementById('root') // Attach the app to the root div in index.html
);

