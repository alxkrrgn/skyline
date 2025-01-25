// src/App.js
import React from 'react';
import FlexBox4 from './FlexBox4';

const FlexBoxImg4 = () => {

    const watchlist = ['MSFT',	'AAPL',	'NVDA',	'AMZN',	'GOOG',	'GOOGL',	'META',	'BRK/A',	'BRK/B',
        'LLY',	'TSM',	'TSLA',	'AVGO',	'NVO',	'JPM',	'V',	'UNH',	'WMT',	'MA',	'XOM',	'JNJ',	'PG',	'HD',
        'ASML',	'MRK',	'COST',	'TM',	'ABBV',	'ORCL',	'CVX',	'AMD',	'CRM',	'BAC',	'KO',	'NFLX',	'ACN',
        'ADBE',	'PEP',	'SAP',	'TMO',	'LIN',	'MCD',	'NVS',	'SHEL',	'ABT',	'AZN',	'CSCO',	'DIS',	'TMUS',	
        'BABA',	'WFC',	'DHR',	'INTU',	'INTC',	'TBC',	'PDD',	'QCOM',	'VZ',	'TBB',	'IBM',	'TTE',	'GE',
        'CMCSA',	'AMAT',	'UBER',	'CAT',	'RYAAY',	'NKE',	'NOW',	'PFE',	'UNP',	'AXP',	'AMGN',	'LYG',	
        'TXN',	'BHP',	'HSBC',	'PM',	'MS',	'FMX',	'RY',	'SPGI',	'ISRG',	'ARM',	'HDB',	'SYK',	'LOW',
        'COP',	'HON',	'GS',	'UPS',	'UL',	'MUFG',	'PLD',	'SNY',	'BA',	'BKNG',	'LRCX',	'BLK',	'T']

    const containerStyle = {
        display: 'flex',
        width: '90vw',
        flexWrap: 'wrap',
        justifyContent: 'space-between',  // Adds space between boxes
        margin: '10vh auto',             // Adds top and bottom spacing
        padding: '2rem',                 // Adds internal spacing for the container
        boxSizing: 'border-box',         // Ensures padding doesn’t increase total width
        gap: '1rem',
    };
    const imgStyle = { width: '100%', height: '100%', border: '1px solid black' };

    const sanitizeSymbol = (symbol) => {
        return symbol.replace('/', '_');
      };
  return (  
   
    <div style={containerStyle}>
      {watchlist.map((symbol) => (
        <React.Fragment key={symbol}>
          {/* FlexBox for Close Prices */}
          <FlexBox4 backgroundColor="#673AB7">
            <img src={`/images/${sanitizeSymbol(symbol)}_Close.jpg`} alt={`${symbol} Close Prices`} style={imgStyle} />
          </FlexBox4>

          {/* FlexBox for Normalized Data */}
          <FlexBox4 backgroundColor="#368887">
            <img src={`/images/${sanitizeSymbol(symbol)}_Norm.jpg`} alt={`${symbol} Normalized Data`} style={imgStyle} />
          </FlexBox4>
        </React.Fragment>
      ))}
    </div>
  );
};

export default FlexBoxImg4;

