const express = require('express');
const passport = require('passport');

const router = express.Router();

// Facebook Routes
router.get('/auth/facebook', passport.authenticate('facebook'));
router.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/' }),
    (req, res) => {
        res.send(`Hello, ${req.user.displayName}!`);
    }
);

// Google Routes
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        res.send(`Hello, ${req.user.displayName}!`);
    }
);

// Twitter Routes
router.get('/auth/twitter', passport.authenticate('twitter'));
router.get(
    '/auth/twitter/callback',
    passport.authenticate('twitter', { failureRedirect: '/' }),
    (req, res) => {
        res.send(`Hello, ${req.user.displayName}!`);
    }
);

module.exports = router;
