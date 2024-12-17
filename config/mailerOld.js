// mailer.js
const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const cors = require('cors');
const app = express();

// Enable CORS for all origins
//app.use(cors());
/*
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

router.post('/config/send-email', cors(corsOptions), (req, res) => {
  // Your mail sending logic here
  res.send('Email sent successfully!');
});

// Or enable CORS for specific origin
app.use(cors({
  origin: 'http://localhost:3000', // Frontend origin
}));
*/
app.listen(5000, () => {
  console.log('Server running on port 5000');
});


// Replace with your SMTP credentials
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'skylinecapitalam@gmail.com',
    pass: '@Josh7887',
  },
});

router.post('/config/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!email || !message) {
    //return res.status(400).json({ error: 'Email and message are required.' });
    setServerMessage({ text: 'Please enter your email:', type: 'error' });
    return;
  }

  try {
    await transporter.sendMail({
      from: `"${name || 'Anonymous'}" skylinecapitalam@gmail.com`,
      to: 'alxkrgn@hotmail.com, admin@cyrus.publicvm.com',
      subject: `${subject || 'Customer Request'} - From ${email}`,
      text: message,
    });

    res.status(200).json({ success: 'Message sent successfully!' , type: 'success'});
  } catch (error) {
    res.status(500).json({ error: `Failed to send message: ${error.message}`, type: 'error' });
  }
});


module.exports = router;
