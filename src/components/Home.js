// src/Home.js
import React from 'react';
import '../styles/FooterResponsive.css';
import '../styles/Home.css'; // Import the CSS file for styling
import '../styles/App.css'; // Import the CSS file for styling
//import '../styles/styles2.css'; // Import the CSS file for styling
//import '../styles/footer.css'; // Import the CSS file for styling
//import '../styles/mobileShatteredGlassDiamond_bg.css'; // Import the CSS file for styling
//import '../styles/loginform.css'; // Import the CSS file for styling
//import '../styles/style_mobile.css'; // Import the CSS file for styling
import '../styles/hero.scss'; // Import the CSS file for styling
import '../styles/parallaxLongCall.css'; // Import the CSS file for styling
import '../styles/cards.css'; // Import the CSS file for styling
import '../styles/cta-button.css'; // Import the CSS file for styling
//import 'aos/dist/aos.css';
import '../styles/cta-button.scss'; // Import the CSS file for styling
import '../styles/cardflip.css'; // Import the CSS file for styling
import '../styles/grids.css'; // Import the CSS file for styling
//import '../styles/responsiveCards.css'; // Import the CSS file for styling
import '../styles/buttons.scss'; // Import the CSS file for styling
import { Parallax } from 'react-parallax';
//import VideoBackground from './ReactPlayer';
//import '../styles/videoAspectRatio169.css'; // Import the CSS file for styling
//import '../styles/noise.css'; // Import the CSS file for styling
//import '../styles/FloatingColorOrbs.scss'; // Import the CSS file for styling
//import '../styles/squareAnimation.css'; // Import the CSS file for styling
import '../styles/PixelStars.scss'; // Import the CSS file for styling
import '../styles/parallax.css'; // Import the CSS file for styling
import CardContainer from './CardContainer';
import AosSection from './AosSection';
import GridContainer from './GridContainer';
import FlexBoxCon2 from './FlexBoxCon2';
import FlexBoxContainer from './FlexBoxContainer';
import FlipCards from './FlipCards';
import TypewriterComponent from './TypewriterComponent';
import FooterX1 from './FooterX1';
import ReactResponsive from './ReactResponsive';
import FooterWaveMobile from './FooterWaveMobile';
import SixCards from './SixCards';
//import '../styles/ButtonHoverEffects.scss'; // Import the CSS file for styling
import FlexBoxStrategiesTopics from './FlexBoxStrategiesTopics';
import FullWidthTitle from './FullWidthTitle';
import PoweredBy from './PoweredBy';
import GridContainerMore from './GridContainerMore';
import { SixCardsRandom, GridContainerRandom } from './RandomCardItems';


function Home() {

  return (

<>

{/*  <EmptyItem colSpan={2} /> */}

{/* Your CSS */}

<ReactResponsive/>

{/*
<div className='spacer'></div>
*/}

<CardContainer /> 

{/*  
<section>
<div className="cards">
  <div className="card">
    <h1>Invest Smarter</h1> 
    <h3>Service 1</h3>
    <p>By employing advanced risk management techniques, innovative portfolio strategies, 
  and sophisticated hedge strategies, we aim to deliver superior returns compared to 
  conventional mutual funds and portfolio management methods.</p>
  </div>
  <div className="card">
    <h1>With Diversity</h1>
    <h3>Service 2</h3>
    <p>We offer great quality.</p>
  </div>
  <div className="card">
    <h1>Service 3</h1>
    <p>Trust us to get the job done.</p>
  </div>
  <div className="card">
    <h2>Service 4</h2>
    <p>Trust us to get the job done.</p>
  </div>
</div>

</section>

{/*  
  <section className="hero">
    <div className="hero-content">
      <h1>Skyline Capital</h1>
      <h2>Your investing journey starts here</h2>
      <br />
      <button className="cta-button">Learn More</button>
      
    </div>
  </section>
*/}

<a href="/getstarted" >
<button
  className="button-81" 
  // data-aos="fade-in"
  //data-aos-duration={1000} 
>
  Get Started
</button>
</a>

<FlexBoxStrategiesTopics />

{/*  
<section>
*/}

<div className="spacer">
  <div className="parallaxTokyo" >
    <h2> <TypewriterComponent /> </h2>
    <p></p>
  </div>
</div>
{/*  
</section>
*/}

<SixCardsRandom />

<a href="/getstarted" >
<button
  className="button-81" 
  // data-aos="fade-in"
  //data-aos-duration={1000} 
>
  Get Started
</button>
</a>

{/*
  <section className="cards">
  <div className="card">
  <h1>Invest Smarter</h1> 
    <h3>Service 1</h3>
    <p>We provide excellent service.</p>
  </div>
  <div className="card">
  <h2>With Diversity</h2>
    <h3>Service 2</h3>
    <p>We offer great quality.</p>
  </div>
  <div className="card">
    <h3>Service 3</h3>
    <p>Trust us to get the job done.</p>
  </div>
</section>
*/}

{/* 
<section>
  <Parallax bgImage={`${process.env.PUBLIC_URL}/images/japan-217882_1920.jpg`}  strength={300}>
    <div style={{ height: 500 }}>
      <h1>Scrolling Background Content</h1>
    </div>
  </Parallax>  
</section>
*/}

{/*
<section className="hero">
    <div className="hero-content">
      <h1>Skyline Capital</h1>
      <h2>Your investing journey starts here</h2>
      <br />
      <button className="cta-button">Learn More</button>
      
    </div>
    */}
{/*  
<section>
*/}
<div className="spacer">
  <div className="parallaxNY" >
    <h2><TypewriterComponent /></h2>
    <p></p>
  </div>
</div>
{/*  
</section>
*/}

{/* 
<section>
  <Parallax bgImage={`${process.env.PUBLIC_URL}/images/japan-217882_1920.jpg`}  strength={300}>
    <div style={{ height: 500 }}>
      <h1>Scrolling Background Content</h1>
    </div>
  </Parallax>  
</section>
*/}

{/* 


<AosSection />
 
*/}

<GridContainerRandom />



{/* 
<FlipCards />
*/}

{/* 

<TypewriterComponent /> 
<FlexBoxCon2 />
<FlexBoxContainer />
*/}

{/* 
<FooterResponsive />
*/}
<PoweredBy />

</>

  );
}

export default Home;
