// mailer.js
const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

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

router.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!email || !message) {
    //return res.status(400).json({ error: 'Email and message are required.' });
    setServerMessage({ text: 'Please enter your email:', type: 'error' });
    return;
  }

  try {
    await transporter.sendMail({
      from: `"${name || 'Anonymous'}" <skylinecapitalam@gmail.com>`,
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
