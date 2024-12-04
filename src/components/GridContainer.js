import React from 'react';
import { Parallax } from 'react-parallax';

const GridContainer = () => {
  
  return (

    <section>
      
    <div className="grid-container nested-grid">
    {/*
    <div className="grid-item">
      <div className="nested-grid">
        <div className="nested-item">Nested 1</div>
        <div className="nested-item">Nested 2</div>
        <div className="nested-item">Nested 3</div>
      </div>
    </div>
    */}
    <div className="grid-item"><h2>Analytics and AI</h2>
    <p>We leverage mathematical and statistical methods, quantitative
    analysis, and artificial intelligence in both the design and 
    execution of our investment programs. This data-driven approach 
    allows us to rigorously assess and manage risk while identifying the 
    highest and best uses of capital.</p></div>

    <div className="grid-item">
    <h2>Diversification Strategies</h2>
    <p>Diversification is a cornerstone of our investment philosophy.
     By spreading investments across a variety of asset classes, sectors, 
     and geographies, we mitigate risks and improve the potential 
     for consistent performance, even in volatile markets.</p>
    </div>
  
    <div className="grid-item">
    <h2>Quantitative Research</h2>
    <p>Our investment strategies are grounded in deep quantitative research,
     which involves the systematic study of financial data to uncover 
     patterns, trends, and opportunities. By combining rigorous data 
     analysis with cutting-edge computational techniques, we strive 
     to create robust, evidence-based strategies for long-term success.</p>
    </div>
    <div className="grid-item"><h2>Risk Management</h2>
    <p>By employing advanced risk management techniques, innovative portfolio strategies, 
    and sophisticated hedge strategies, we aim to deliver superior returns compared to 
    conventional mutual funds and portfolio management methods.</p></div>

    <div className="grid-item"><h2>Portfolio Construction</h2>
    <p> Technical analysis and portfolio construction are integral to strategic investing. 
    Technical analysis involves evaluating securities by analyzing statistical trends 
    gathered from trading activities, such as price movement and volume. </p></div>

    <div className="grid-item"><h2>Technical Analysis</h2>
    <p>Portfolio construction, on the other hand, involves the strategic allocation of 
    assets to achieve a balanced and diversified portfolio that aligns with our 
    investors risk tolerance and financial goals.</p></div>

  </div>
  
 </section>

)};

export default GridContainer;