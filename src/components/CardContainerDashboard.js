import React from 'react';
import '../styles/cardflip.css'; 
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS for animations to work


const CardContainerDashboard = () => {
  
  return (
    
    <section>
    <div className="card-container" >

    <div className="card" > {/* data-aos="flip-right" data-aos-duration={2000}*/}
      
    <h1>Market Indices Update</h1>
     <h2>Futures & Commodities</h2> 
      <h3>Market Analysis</h3>
     
      </div>
    
    <div className="card" > {/* data-aos="flip-right" data-aos-duration={2000}*/}
      
    <h1>Top 20 Stocks</h1> 
      <h2>Top Gainers/Losers</h2> 
        <h3>Top Volume</h3>
    </div>
    <div className="card" > {/* data-aos="flip-right" data-aos-duration={2000}*/}
      
    <h1>Top 20 Options</h1> 
      <h2>Top Call/Put Premiums</h2> 
        <h3>Top Put/call Volume</h3>
      
    </div>
    <div className="card" > {/* data-aos="flip-right" data-aos-duration={2000}*/}
      
    <h1>Volatility View</h1> 
      <h2>Top 10 Greeks</h2> 
        <h3>Top 20 Gamma</h3>
    </div>
    </div>

</section>



)};

export default CardContainerDashboard;