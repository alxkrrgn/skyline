import React from 'react';
import "../styles/full-width-title.css";
import { Link } from 'react-router-dom';

const FwtStockOptions = () => {
  
  return (
   
<Link to="/stock-options">
  <div className="full-width-title">
     <h1>Stock Options Strategies</h1>
  </div>
</Link>
  );
};

export default FwtStockOptions;