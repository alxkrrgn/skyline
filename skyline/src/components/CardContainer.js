import React from 'react';
import '../styles/cardflip.css'; 
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS for animations to work


const CardContainer = () => {
  
  return (
    
    <section>
    <div className="card-container" >

    <div className="card" > {/* data-aos="flip-right" data-aos-duration={2000}*/}
      
    <h1>Sound Investments</h1>
     <h2>Based on Research</h2> 
      <h3>And Market Analysis</h3>
     
      </div>
    
    <div className="card" > {/* data-aos="flip-right" data-aos-duration={2000}*/}
      
    <h1>Market Research</h1> 
      <h2>Comprehensive Insights</h2> 
        <h3>For Smarter Investments</h3>
    </div>
    <div className="card" > {/* data-aos="flip-right" data-aos-duration={2000}*/}
      
    <h1>Winning Strategies</h1> 
      <h2>Powered by AI</h2> 
        <h3>To Outperform Markets</h3>
      
    </div>
    <div className="card" > {/* data-aos="flip-right" data-aos-duration={2000}*/}
      
    <h1>Risk Management</h1> 
      <h2>Hedge Strategies</h2> 
        <h3>For Downside Protection</h3>
    </div>
    </div>

</section>

)};

export default CardContainer;