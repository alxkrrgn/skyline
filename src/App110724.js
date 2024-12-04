// src/App.js
import React, { useEffect } from 'react';
//import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import About from './components/About';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/App.css';
import MyComponent from './components/MyComponent'; // Make sure this path is correct

import 'aos/dist/aos.css';  // Import the AOS CSS for animations to work
import AOS from 'aos';
import { ChakraProvider, Box, Heading, Grid, GridItem, Text, Button, Container } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

function App() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <div className="App">
     
        <Header />
        <main>
          <Routes>  {/* Use Routes instead of Switch */}
            <Route path="/" element={<Home />} />  {/* Define routes with the 'element' prop */}
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

    
        <Footer />
        
      <MyComponent /> {/* Use the component */}
    
      </div>
    </Router>
  );
}

export default App;

