//import React from 'react';

const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

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
