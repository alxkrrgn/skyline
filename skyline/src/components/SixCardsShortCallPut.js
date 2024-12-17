import React from 'react';
import { Parallax } from 'react-parallax';
import '../styles/cardflip.scss'; 
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS for animations to work
//import AAPLTable from '../assets/images/AAPL_options_table.png';
//import AAPLRiskChart from './public/images/AAPL_call_option_risk_chart.png';


const SixCardsShortCallPut = () => {

  //console.log(AAPLTable);
  //console.log(AAPLRiskChart);

  return (
    
    <section>

      <div className="full-width-title">
        <h1>Naked/Covered Call</h1>
      </div>
      <div className="cards">
        <div className="card" style={{ height: 'auto' }}  >
          <h2>Naked/Covered Call</h2>
          <p>

          A naked call option, also known as an uncovered call, is an options 
          trading strategy where the seller (or writer) of the call option 
          does not own the underlying asset. This exposes the seller to 
          potentially unlimited risk. <br/><br/>
          A covered call option is a conservative strategy where the seller
           (or writer) of a call option owns the underlying asset, which 
           "covers" the obligation of delivering the asset if the option is exercised.<br/><br/>
            As you see in the options table, the call option premium at strike price of $185 for the Broadcom stock (Ticker: AVGO)
            is priced at the ask price of $2.22 expiring on Dec 27th.
            <br/> <br/>
           
          </p>
        </div>
        <div className="cardImage" style={{ height: 'auto' }}  >
          <img src={'/images/NakedCall_AVGO_Dec24Strike185.png'} alt="Test" style={{ width: '100%' }} />
        </div>

        <div className="cardImage" style={{ height: 'auto' }}>
          <img src={'/images/NakedCallChart_AVGO_Dec24Strike185_cropped.png'} alt="Test" style={{ width: '100%' }} />
        </div>
        <div className="card" style={{ height: 'auto' }}>
        <h2>Naked/Covered Call Risk Chart</h2>
          <p>
          The risk is theoretically unlimited for a naked call, as there is no cap on
           how high the underlying assets price can rise. <br/>In case of a covered call, 
           the risk is limited to the potential decline in the value of the owned asset 
           (like holding the stock without options). <br/> No additional risk is introduced 
           by the call option since the seller already owns the asset.<br/><br/>
           The maximum profit of a short call option is the premium received, achieved if the option 
           expires worthless (when the market price is below the strike price at expiration).
             <br/><br/> In case of a covered call, Profit is capped because the seller 
             forgoes additional upside if the asset price rises significantly above the strike price.
            <br/><br/>    
               
          </p>
        </div>
      </div>
      
<div className="full-width-title">
        <h1>Naked Put</h1>
      </div>
      <div className="cards">
        <div className="card" style={{ height: 'auto' }} >
          <h2>Naked Put</h2>
          <p>
          A short put option is a financial strategy in options trading 
          where the seller (or writer) of the put option agrees to buy 
          the underlying asset at the strike price if the buyer of the 
          put exercises the option. <br/><br/>
          Objective: The seller earns a premium upfront for taking 
          on the obligation to purchase the asset.<br/><br/>
          Obligation: If the asset's market price falls below the strike
          price at expiration, the seller is obligated to buy the asset 
          at the strike price, even if it is higher than the market price.
        <br/><br/>
            As you see in the options table, the put option premium at strike price of $155 for the Broadcom stock (Ticker: AVGO)
            is priced at the ask price of $3.15 expiring on Oct 27th.
            <br/> <br/> 
           
          </p>
        </div>
        <div className="cardImage" style={{ height: 'auto' }} >
          <img src={'/images/NakedPut_AVGO_Dec27Strike155.png'} alt="Test" style={{ width: '100%' }} />
        </div>

        <div className="cardImage" style={{ height: 'auto' }}>
          <img src={'/images/Chart_AVGO_Dec022024.png'} alt="Test" style={{ width: '100%' }} />
        </div>
        <div className="card" style={{ height: 'auto' }}>
        <h2>Naked Put Risks</h2>
          <p>
          Risk: The risk is potentially significant since the underlying asset’s price could theoretically drop to zero.<br/>
          Profit Potential: The seller keeps the entire premium received if the option expires worthless,
           which occurs when the underlying asset’s market price is above the strike price at expiration.
        <br/><br/>
        A short put reflects a bullish outlook, as the seller expects the asset’s 
        price to remain stable or rise, making the option less likely to be exercised..<br/><br/>
        One good example of a winning short put is after the quarterly earnings announcement when the earnings 
        beat the estimates and the stock price jumps with the implied volatility bottom at the same time.<br/> <br/>     
               
          </p>
        </div>
      </div>
      
    </section>
  
  )};

export default SixCardsShortCallPut;
