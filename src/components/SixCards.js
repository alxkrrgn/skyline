import React from 'react';
import { Parallax } from 'react-parallax';
import '../styles/cardflip.scss'; 
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS for animations to work


const SixCards = () => {
  
  return (
    
  <section id="location">
    <div className="cards">
        <div className="card">
          <h2> Analytics and AI </h2>
            <p>We leverage mathematical and statistical methods, quantitative
                analysis, and artificial intelligence in both the design and 
                execution of our investment programs. This data-driven approach 
                allows us to rigorously assess and manage risk while identifying the 
                highest and best uses of capital.</p>
        </div>
    
        <div className="card">
        <h2> Market Sentiment Analysis </h2>
               <p> We stay attuned to market sentiment by analyzing social signals,
                 news, and broader economic indicators. This provides invaluable 
                 context for decision-making and helps us anticipate market 
                 movements with greater accuracy.</p>
        </div>
    
        <div className="card">
        <h2>Arbitrage Strategies</h2>
                  <p>Through arbitrage strategies, we exploit price inefficiencies across 
                    markets and instruments. This risk-controlled approach allows us to 
                    achieve consistent gains while minimizing exposure to broader market risks.</p>
        </div>
    
        <div className="card">
          <h2>Risk Management</h2>
          <p>By employing advanced risk management techniques, innovative portfolio strategies, 
          and sophisticated hedge strategies, we aim to deliver superior returns compared to 
          conventional mutual funds and portfolio management methods.</p>
        </div>
    
        <div className="card">
          <h2>Technical Analysis</h2>
          <p>  
          Technical analysis involves evaluating securities by analyzing statistical trends 
          gathered from trading activities, such as price movement and volume.
          Portfolio construction, on the other hand, involves the strategic allocation of 
          assets to achieve a balanced and diversified portfolio that aligns with our 
          investors risk tolerance and financial goals.
           </p>
        </div>
    
        <div className="card">

        <h2>Event-Driven Strategies</h2>
          <p>Market movements are often influenced by corporate and macro events. Event-driven
         strategies focus on opportunities arising from mergers, acquisitions, earnings
          announcements, and regulatory changes, enabling us to capitalize on short-term
           market inefficiencies.</p>
      
        </div>
    
      </div>
    </section>
    

)};

export default SixCards;