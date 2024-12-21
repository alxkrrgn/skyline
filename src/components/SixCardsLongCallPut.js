import React from 'react';
import { Parallax } from 'react-parallax';
import '../styles/cardflip.scss'; 
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS for animations to work
//import AAPLTable from '../assets/images/AAPL_options_table.png';
//import AAPLRiskChart from './public/images/AAPL_call_option_risk_chart.png';


const SixCardsLongCallPut = () => {

  //console.log(AAPLTable);
  //console.log(AAPLRiskChart);

  return (
    
    <section>

      <div className="full-width-title">
        <h1>Long Call</h1>
      </div>
      <div className="cards">
        <div className="card" style={{ height: 'auto' }}  >
          <h2>Long Call</h2>
          <p>

            A long call options strategy is an options trading approach where an investor buys call options,
            expecting the price of the underlying asset (e.g., a stock) to rise above the strike price
            before the options expire. <br/><br/>
            Long call options give the buyer the right, but no obligation, 
            to purchase shares of the underlying asset at the strike price on or before expiration. 
            A long call option contract is equivalent to owning 100 shares of stock, but requires less capital to purchase.<br/><br/>
            As you see in the options table, the call option premium at strike price of $235 for the Apple stock (Ticker: AAPL)
            is priced at the ask price of $2.32 expiring on Oct 24th.
            <br/> <br/>
           
          </p>
        </div>
        <div className="cardImage" style={{ height: 'auto' }}  >
          <img src={'/images/AAPL_options_table.png'} alt="Test" style={{ width: '100%' }} />
        </div>

        <div className="cardImage" style={{ height: 'auto' }}>
          <img src={'/images/AAPL_call_risk_chart.png'} alt="Test" style={{ width: '100%' }} />
        </div>
        <div className="card" style={{ height: 'auto' }}>
        <h2>Long Call Risk Chart</h2>
          <p>
                The risk chart shows the maximum loss of $226 and unlimited potential upside profit. 
                Risk is limited to the premium paid plus commissions, and a loss of this amount is 
                realized if the call is held to expiration and expires worthless.<br/><br/>
                Long options are ideal when the options premiums are cheap or when the implied 
                volitality is low or minimum or after particular events or mergers.<br/><br/>
                One good example is after the quarterly earnings announcement when the earnings don't 
                beat the estimates and the stock price along with the implied volatility bottom at the same time.<br/><br/>    
               
          </p>
        </div>
      </div>
      
<div className="full-width-title">
        <h1>Long Put</h1>
      </div>
      <div className="cards">
        <div className="card" style={{ height: 'auto' }} >
          <h2>Long Put</h2>
          <p>
            A long Put options strategy is an options trading approach where an investor buys put options,
            expecting the price of the underlying asset (e.g., a stock) to fall below the strike price
            before the options expire. <br/><br/>
            Long put options give the buyer the right, but no obligation, 
            to sell shares of the underlying asset at the strike price on or before expiration. 
            A long put option contract is equivalent to owning 100 shares of stock, but requires less capital to purchase.<br/><br/>
            As you see in the options table, the put option premium at strike price of $220 for the Apple stock (Ticker: AAPL)
            is priced at the ask price of $2.10 expiring on Oct 24th.
            <br/> <br/> 
           
          </p>
        </div>
        <div className="cardImage" style={{ height: 'auto' }} >
          <img src={'/images/AAPL_Put_chains_Oct_24.png'} alt="Test" style={{ width: '100%' }} />
        </div>

        <div className="cardImage" style={{ height: 'auto' }}>
          <img src={'/images/AAPL_Put_Risk_Chart_Oct_24.png'} alt="Test" style={{ width: '100%' }} />
        </div>
        <div className="card" style={{ height: 'auto' }}>
        <h2>Long Put Risk Chart</h2>
          <p>
          The risk chart shows the maximum upside loss of $205 and unlimited potential downside profit. 
                Risk is limited to the premium paid plus commissions, and a loss of this amount is 
                realized if the put is held to expiration and expires worthless.<br/><br/>
                Long options are ideal when the options premiums are cheap or when the implied 
                volitality is low or minimum or after particular events or mergers.<br/><br/>
                One good example is after the quarterly earnings announcement when the earnings don't 
                beat the estimates and the stock price along with the implied volatility bottom at the same time.<br/> <br/>     
               
          </p>
        </div>
      </div>
      
    </section>
  
  )};

export default SixCardsLongCallPut;
