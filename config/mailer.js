// mailer.js
const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const cors = require('cors');
const app = express();

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

router.post('/config/send-email', cors(corsOptions), async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ error: 'Email and message are required.' });
  }

  try {
    await transporter.sendMail({
      from: `"${name || 'Anonymous'}" <skylinecapitalam@gmail.com>`,
      to: 'alxkrgn@hotmail.com, admin@cyrus.publicvm.com',
      subject: `${subject || 'Customer Request'} - From ${email}`,
      text: message,
    });

    res.status(200).json({ success: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ error: `Failed to send message: ${error.message}` });
  }
});

// Your mail transporter setup
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'skylinecapitalam@gmail.com',
    pass: '@Josh7887',
  },
});

module.exports = router;
