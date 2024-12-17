// src/components/About.js
import React from 'react';
import '../styles/About.css'; // Import the CSS file specific to About component
import '../styles/App.css';
import FlexBoxStrategiesTopics from './FlexBoxStrategiesTopics';
import FullWidthTitle from './FullWidthTitle';
import FwtStocks from './FwtStocks';
import FlexBoxStocks from './FlexBoxStocks';
import FwtStockOptions from './FwtStockOptions';
import FlexBoxStockOptions from './FlexBoxStockOptions';
import FwtFutures from './FwtFutures';
import FlexBoxFutures from './FlexBoxFutures';

function Strategies() {

  return (

    <>

    <section> 

    <FwtStocks />
    <FlexBoxStocks />

    <FwtStockOptions />
    <FlexBoxStockOptions />

    <FwtFutures />
    <FlexBoxFutures />
    
    </section>

    </>

  );
}

export default Strategies;

