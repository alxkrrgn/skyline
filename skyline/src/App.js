// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS for animations to work

import Header from "./components/Header";
import FooterResponsive from "./components/FooterResponsive";
import Home from "./components/Home";
import About from "./components/About";
import ContactGit from "./components/ContactGit";
import Strategies from "./components/Strategies";
import FlexBoxStockOptionsPage from "./components/FlexBoxStockOptionsPage";
import Login from "./components/Login";
import Register from "./components/Register";
import GetStartedGit from "./components/GetStartedGit";
import Dashboard from './components/Dashboard';

//import AOS from 'locomotive-aos'; // Example, adjust based on library docs
import VideoBgStars from './components/VideoReactPlayerStars';
import VideoBgPage from './components/VideoBackground';
import BackgroundEffect from './components/BackgroundEffect';
import AnimatedXOtriangles from './components/AnimatedXOtriangles';
import AnimatedPixelStars from './components/AnimatedPixelStars';

import ReactResponsive from './components/ReactResponsive';
import CardContainer from './components/CardContainer';
import FlexBoxStrategiesTopics from './components/FlexBoxStrategiesTopics';


import NavigationMenu from './components/NavigationMenu';

//const mailer = require('./config/mailer'); // Correct relative path
//app.use('/config', mailer);
   // Initialize AOS with custom settings

//AOS.init({
 // duration: 1000, // Animation duration
// once: true, // Trigger animations only once
//  offset: 120, // Offset from the top of the screen
//});

//let observer = new IntersectionObserver( (entries, observer) => {  entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('aos-animate'); }else{ entry.target.classList.remove('aos-animate'); } }); }); document.querySelectorAll('[data-aos]').forEach(aosElem => { observer.observe(aosElem) });
// Check to ensure no duplicate imports
//import { ChakraProvider, Box, Heading, Grid, GridItem, Text, Button, Container } from "@chakra-ui/react";
//import { FaArrowRight } from "react-icons/fa";

function App() {

  useEffect(() => {

    AOS.init({
      duration: 1000,
      offset: 100,
      once: false,  
    });
  
    // Recalculate positions after content or layout updates
    AOS.refresh();
  }, []);

  return (

    <Router>
        <div className="App">
      
         <Header/>  
         {/* 
          {/*
         <AnimatedXOtriangles />
          */}
         <AnimatedPixelStars />
        
        {/* <VideoBgPage /> */}
        
        {/* <AnimatedXOtriangles />*/}
        {/* <VideoBgPage /> */}

        <main>
        
          <Routes>  {/* Use Routes instead of Switch */}
            {/* Render components only on the home page */}
            {/*
            <Route
              path="/"
              element={
                <>
                  <ReactResponsive />
                  <CardContainer />
                  <FlexBoxStrategiesTopics />
                  <Home />
                </>
              }
            /> */}
            <Route path="/" element={<Home />} />  {/* Define routes with the 'element' prop */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactGit />} />
            <Route path="/strategies" element={<Strategies />} />
            <Route path="/stock-options" element={<FlexBoxStockOptionsPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/getstarted" element={<GetStartedGit />} />
            <Route path="/navigate" element={<NavigationMenu />} />
            <Route path="/dashboard" element={<Dashboard />} />

            {/* <Route path="/about" element={<About />} /> */}
          </Routes>
        </main>     

        {/*<FlexBoxCon2 />  Use the component */}
        {/*<FlexBoxContainer />  Use the component */}
        {/* <VideoTextureComponent /> */}
        {/*<VideoBg3F />*/}
        {/* <VideoBackground /> 
         <VideoPlayer /> */}
        {/* Use the component */}
        {/* <Locomotive /> */}
        {/*<MyComponent />*/} {/* Use the component */}
        {/*  <FooterBootstrap /> */}
        <FooterResponsive />
        
        
        </div>
      </Router>
  );
}

export default App;

