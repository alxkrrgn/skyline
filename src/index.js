import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom';
import './styles/index.css'; // Import global styles (optional)
import App from './App'; // Import the main App component

=======
import ReactDOM from 'react-dom/client'; // React 18+
import './styles/index.css'; // Import global styles (optional)
import App from './App'; // Import the main App component

/*
>>>>>>> d5c9181 (Initial commit)
ReactDOM.render(
  <App />,  // No Router here, App.js will handle routing
 document.getElementById('root') // Attach the app to the root div in index.html
);
<<<<<<< HEAD

=======
*/

const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
); 
>>>>>>> d5c9181 (Initial commit)
