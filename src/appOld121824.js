//import React from 'react';

const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
const { SitemapStream, streamToPromise } = require('sitemap'); // Ensure this is installed via npm

app.use(express.static(path.join(__dirname, 'build')));

app.get('/sitemap.xml', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'sitemap.xml'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/', (req, res) => {
    res.send('Express is working!');
  });
// CORS configuration
app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  }));
  
  // Alternatively, you can set headers manually for more fine-grained control
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Allow this origin
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allowed methods
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allowed headers
    next();
  });
  
  app.get('/sitemap.xml', async (req, res) => {
    try {
      const sitemap = new SitemapStream({ hostname: 'https://skyline-wealth.com' });
      sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
      sitemap.write({ url: '/strategies', changefreq: 'weekly', priority: 0.8 });
      sitemap.write({ url: '/contact', changefreq: 'weekly', priority: 0.6 });
      sitemap.write({ url: '/getstarted', changefreq: 'weekly', priority: 0.4 });
      sitemap.write({ url: '/about', changefreq: 'weekly', priority: 0.3 });
      sitemap.write({ url: '/stock-options', changefreq: 'weekly', priority: 0.5 });
      sitemap.write({ url: '/login', changefreq: 'weekly', priority: 0.9 });
      sitemap.write({ url: '/register', changefreq: 'weekly', priority: 0.7 });
      sitemap.end();
  
      const xmlData = await streamToPromise(sitemap);
      res.header('Content-Type', 'application/xml');
      res.send(xmlData);
    } catch (err) {
      console.error('Error generating sitemap:', err);
      res.status(500).send('Error generating sitemap');
    }
  });

  app.use('/public', express.static('public'));

  // Example route
  app.get('/', (req, res) => {
    res.send('CORS is configured!');
  });
//const mailerRoutes = require('/config/mailer');

const mailerRouter = require('../config/mailer'); // adjust path if necessary
app.use('/config/send-mail', mailerRouter);

app.use(express.json()); // Middleware to parse JSON
//app.use('/config', mailerRoutes); // Serve mailer routes under '/api'

// Middleware
//const cors = require('cors');
//app.use(cors());
app.use(bodyParser.json());

//axios.defaults.baseURL = 'http://localhost/';

app.use(bodyParser.urlencoded({ extended: true }));
/*
app.post('/register', async (req, res) => {
    try {
        const response = await axios.post('http://localhost:5000/register.php', req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});
*/
/*
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
*/
app.all('*', (req, res) => {
    console.log('Request Method:', req.method, 'Request URL:', req.originalUrl);
    res.status(404).send('Route not found');
  });

app.use(cors({
    origin: 'http://localhost:3000'  // Your frontend URL
  }));
/*
app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
  });
  */
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
