
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

//const mailerRoutes = require('/config/mailer');

const mailerRouter = require('./mailer'); // adjust path if necessary
app.use('/config', mailerRouter);

app.use(express.json()); // Middleware to parse JSON
//app.use('/config', mailerRoutes); // Serve mailer routes under '/api'

// Middleware
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());

//axios.defaults.baseURL = 'http://localhost/';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/register', async (req, res) => {
    try {
        const response = await axios.post('http://localhost:5000/register.php', req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.use(cors({
    origin: 'http://localhost:3000'  // Your frontend URL
  }));

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
  });
