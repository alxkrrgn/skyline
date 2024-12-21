import React, { useState } from "react";
import '../styles/dynamic-container.css'; // Import the CSS file for styling

const DynamicShowMore = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Split the text at <br /> for the first line and the rest
  const [firstLine, ...remainingLines] = text.split("</h2>");
  const remainingText = remainingLines.join("</h2>");

  const toggleShowMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      style={{
        width: "50vw", // Set a maximum width for the element
        maxWidth: "51vw",
        margin: "0px auto",
        lineHeight: "1.5",
        wordWrap: "break-word", // Ensure words wrap within the container
        overflowWrap: "break-word",
      }}
      className="dynamic-container" // Add a class for mobile-specific styles
    >
      <p
        style={{
          fontSize: "clamp(16px, 2.5vw, 20px)", // Responsive font size
          fontWeight: "500", // Light font weight
          whiteSpace: "pre-wrap", // Preserve whitespace and line breaks
        }}
      >
        <span dangerouslySetInnerHTML={{ __html: firstLine }} />
        {!isExpanded && " ..."}
        {isExpanded && (
          <>
            {" "}
            <br />
            <span dangerouslySetInnerHTML={{ __html: remainingText }} />
          </>
        )}
      </p>
      <button
        onClick={toggleShowMore}
        style={{
          marginTop: "10px",
          padding: "10px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "clamp(14px, 2vw, 18px)", // Button font size responsive
        }}
      >
        {isExpanded ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default function App() {
  const text = 
`<h2> Analytics and AI </h2>
We leverage mathematical and statistical methods, quantitative
analysis, and artificial intelligence in both the design and 
execution of our investment programs. This data-driven approach 
allows us to rigorously assess and manage risk while identifying the 
highest and best uses of capital. `;
  return (
    <div>
      <DynamicShowMore text={text} />
    </div>
  );
}



