import React, { useState } from "react";

const DynamicShowMoreP = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Split the text into the first sentence and the rest
  const [firstSentence, ...restOfText] = text.split(". ");
  const remainingText = restOfText.join(". ");

  const toggleShowMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={{ maxWidth: "45vw", margin: "20px auto", lineHeight: "1.6" }}>
      <p
        style={{
          fontSize: "clamp(16px, 2.5vw, 20px)", // Responsive font size between 16px and 20px
          fontWeight: "300", // Light font weight
        }}
      >
        {firstSentence}.
        {!isExpanded && " ..."}
        {isExpanded && ` ${remainingText}`}
      </p>
      <button
        onClick={toggleShowMore}
        style={{
          marginTop: "10px",
          padding: "8px 16px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "clamp(16px, 2.5vw, 20px)", // Button font size slightly smaller
          fontWeight: "300", // Light font weight for button
        }}
      >
        {isExpanded ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default function App() {
  const text =
    "We leverage mathematical and statistical methods, quantitative analysis, and artificial intelligence in both the design and execution of our investment programs. This data-driven approach allows us to rigorously assess and manage risk while identifying the highest and best uses of capital. Our ultimate goal is to generate superior long-term returns for our investors, consistently outperforming traditional market strategies.";

  return (
    <div>
      <DynamicShowMoreP text={text} />
    </div>
  );
}

