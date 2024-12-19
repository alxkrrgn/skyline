const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap'); // Ensure this is installed via npm
const app = express();


app.use(express.json());
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'build')));

app.use('/public', express.static(path.join(__dirname, 'public')));

// Serve the sitemap.xml explicitly
app.get('/sitemap.xml', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'sitemap.xml'));
});

// Serve sitemap.xml
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
    console.log('Generated Sitemap:', xmlData.toString()); 

    res.header('Content-Type', 'application/xml');
    res.send(xmlData);
  } catch (err) {
    console.error('Error generating sitemap:', err);
    res.status(500).send('Error generating sitemap');
  }
});

// Catch-all route to serve the React app for all other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Adjust based on your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Serve React build files

// Serve static files from 'public' folder
//app.use('/public', express.static('public'));

/*
// Fallback to React for other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Catch-all for undefined routes
app.all('*', (req, res) => {
  console.log('Request Method:', req.method, 'Request URL:', req.originalUrl);
  res.status(404).send('Route not found');
});
*/
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
