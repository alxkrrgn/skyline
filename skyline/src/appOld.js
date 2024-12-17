const express = require('express');
const session = require('express-session');
const passport = require('./config/passport'); // Import Passport config
const authRoutes = require('./routes/authRoutes'); // Import authentication routes
const fetch = require('node-fetch'); // npm install node-fetch

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    session({
        secret: 'your-secret-key',
        resave: false,
        saveUninitialized: true,
    })
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use(authRoutes); // Use auth routes

// Home Page
app.get('/', (req, res) => {
    res.send('<h1>Welcome</h1><a href="/auth/google">Login with Google</a>');
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.post('/register', (req, res) => {
    const { email, password, cpass } = req.body;

    if (!email || !password || password !== cpass) {
        return res.status(400).json({ error: 'Invalid input or passwords do not match.' });
    }

    // Prepare data to send to PHP
    const formData = new URLSearchParams({ email, password }).toString();

    // Forward to PHP script
    fetch('http://localhost/register.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData,
    })
        .then((phpRes) => phpRes.json()) // Parse JSON from PHP response
        .then((phpData) => res.status(200).json(phpData)) // Forward PHP response to React
        .catch((err) => res.status(500).json({ error: 'PHP backend error.' }));
});
