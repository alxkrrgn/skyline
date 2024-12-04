import React, { useState } from "react";
import "../styles/FlipCards.scss";

const FlipCards = () => {
  const [flippedCards, setFlippedCards] = useState({}); // Track flip states for cards by index

  const toggleFlip = (index) => {
    setFlippedCards((prevFlipped) => ({
      ...prevFlipped,
      [index]: !prevFlipped[index], // Toggle the flip state for the specific card
    }));
  };

  const cardData = [
    {
      frontTitle: "Invest Better",
      frontSubtitle: "With Confidence",
      backText:
        "We leverage mathematical and statistical methods, quantitative analysis, and artificial intelligence in both the design and execution of our investment programs.",
    },
    {
      frontTitle: "Better Investing",
      frontSubtitle: "Through Research",
      backText:
        "Our dedicated research efforts help uncover opportunities and manage risks for consistent performance.",
    },
    {
      frontTitle: "Sound Strategies",
      frontSubtitle: "By Analytics & AI",
      backText:
        "We use cutting-edge analytics and AI tools to develop strategies for optimal results.",
    },
    {
      frontTitle: "Risk Assessment",
      frontSubtitle: "Technical Analysis",
      backText:
        "Our technical analysis provides critical insights into market trends and risk management.",
    },
  ];

  return (
    <section className="card-container">
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`card ${flippedCards[index] ? "flipped" : ""}`}
        >
          <div className="card-inner">
            <div className="card-front">
              <h1>{card.frontTitle}</h1>
              <h2>{card.frontSubtitle}</h2>
              <button className="button-81" onClick={() => toggleFlip(index)}>
                Learn More
              </button>
            </div>
            <div className="card-back">
              <h3>{card.backText}</h3>
              <button className="button-81" onClick={() => toggleFlip(index)}>
                Go Back
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FlipCards;

