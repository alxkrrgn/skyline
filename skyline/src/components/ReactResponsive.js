import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player"; // Install with `npm install react-player`
import Hero from "./Hero"; // Import your Hero component
//import { useMediaQuery } from 'react-responsive';
import '../styles/App.css'; // Import the CSS file for styling


const ReactResponsive = () => {

  //const isMobile = useMediaQuery({ maxWidth: 768 });

  const scrollToLocation = () => {
    const locationElement = document.getElementById('location');
    if (locationElement) {
      locationElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const [data, setData] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check mobile or desktop
    const updateMobileView = () => {

      setIsMobile(window.innerWidth <= 768); // Adjust based on your breakpoint
    };

    // Initial check
    updateMobileView();

    // Listener for screen resize
    window.addEventListener("resize", updateMobileView);

    // Fetch data based on the view (desktop/mobile)
    const mode = isMobile ? "mobile" : "desktop";
    fetch(`http://localhost/DataVideoImageBlueStock.php?mode=${mode}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));

    // Cleanup event listener
    return () => window.removeEventListener("resize", updateMobileView);
  }, [isMobile]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <section>
    <div>
      {/* Render Video for Desktop */}
      {!isMobile && data.type === "video" && (
        
        <div style={{ position: "relative", width: "90vw",margin: "0 5vw",top: '0', height: "auto", borderRadius: '20px', 
          //border: "3px solid orange"
        }}>
        <ReactPlayer
          url={`http://localhost/${data.source}`} // Ensure correct URL
          playing
          loop
          muted
          width="100%"
          height="100%"
        />
        {/* Overlay Content */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            zIndex: 2, // Ensure it's above the video
          }}
        >
          {/*<h1 style={{ color: 'white' }}>Skyline Capital</h1>*/}
          <h1 style={{ color: "white" }}>Investment Solutions For Everyone</h1>
          <br />
          <button
            className="button-81" onClick={scrollToLocation}
            // data-aos="fade-in"
            //data-aos-duration={1000} 
          >
            Learn More
          </button>
        </div>
      </div>
      )}
      {/* Render Hero Component for Mobile */}
      {isMobile && data.type === "image" && (

<div style={{ position: 'relative', top: '0', left: '0', height: 'auto', width: '100%', right: '0', bottom: '0'}}>
<Hero backgroundImage={`http://localhost/${data.source}`} />
<div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign:'center' }}>
  <h2 style={{ color: 'white' }}>Investment Solutions For Everone</h2>
  <button
            className="button-81" onClick={scrollToLocation}
            //data-aos="fade-in"
            //data-aos-duration={1000}
          >
            Learn More
          </button>
</div>
</div>
        
      )}

      {/* Fallback for unsupported types */}
      {data.type !== "video" && data.type !== "image" && (
        <div>Unsupported content type.</div>
      )}
    </div>
    </section>
  );
};

export default ReactResponsive;


