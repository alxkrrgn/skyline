// src/components/About.js
import React from 'react';
import '../styles/poweredby.css'; // Import the CSS file specific to About component

function PoweredBy() {

    document.addEventListener("DOMContentLoaded", () => {
        const logosContainer = document.querySelector(".logos");
        const clonedLogos = logosContainer.innerHTML; // Clone the content
        logosContainer.innerHTML += clonedLogos; // Append the cloned content
      });

  return (
    
    <div className="powered-by">
  <h2>Powered By:</h2>
  <div className="logos">
    <img src="/images/Tableau_Logo_PNG4.png" alt="Python" />
    <img src="/images/Github_logo_PNG2.png" alt="GitHub" /> 
    <img src="/images/Python-Logo-4.svg" alt="Tableau" />
    <img src="/images/Ubuntu-Logo-4.svg" alt="ubuntu" />
    <img src="/images/IBM-Logo-2.svg" alt="IBM" /> 
    <img src="/images/Gitlab-logo-1.svg" alt="GitLab" /> 
    <img src="/images/ChatGPT-logo-5.svg" alt="ChatGPT" /> 

    {/* Add more logos here */}
  </div>
</div>
  );
}

export default PoweredBy;

