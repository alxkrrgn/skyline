import React, { useState } from "react";

const DynamicShowMore_old = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Split the text into the first sentence and the rest
  const [firstSentence, ...restOfText] = text.split("<br />");
  const remainingText = restOfText.join("<br />");

  const toggleShowMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      style={{
        width: "400px",
        maxWidth: "500px",
        margin: "20px 40px 20px 20px",
        lineHeight: "1.6",
      }}
    >
      <p
        style={{
          fontSize: "clamp(16px, 2.5vw, 20px)", // Responsive font size between 16px and 20px
          fontWeight: "400", // Light font weight
        }}
      >
        <span dangerouslySetInnerHTML={{ __html: firstSentence }} />
        {!isExpanded && " ..."}
        {isExpanded && (
          <span dangerouslySetInnerHTML={{ __html: remainingText }} />
        )}
      </p>
      <button
        className="button-81"
        onClick={toggleShowMore}
        style={{
          marginTop: "20px auto",
          padding: "10px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "clamp(16px, 2.5vw, 20px)", // Button font size slightly smaller
        }}
      >
        {isExpanded ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default function App() {
  const text = `
  We leverage mathematical and statistical methods, quantitative analysis, and artificial intelligence
  in both the design and execution of our investment programs.
  This data-driven approach allows us to rigorously assess and manage risk while identifying the
  highest and best uses of capital.
  Our ultimate goal is to generate superior long-term returns for our investors, consistently outperforming traditional market strategies.
`;
  return (
    <div>
      <DynamicShowMore_old text={text} />
    </div>
  );
}


