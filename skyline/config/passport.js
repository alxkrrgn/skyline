const express = require('express');
const passport = require('passport');
const session = require('express-session');
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;


// Middleware
app.use(
    session({
        secret: 'your-secret-key',
        resave: false,
        saveUninitialized: true,
    })
);
app.use(passport.initialize());
app.use(passport.session());
// Serialize and Deserialize

passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((user, done) => {
    done(null, user);
});

// Facebook Strategy
passport.use(
    new FacebookStrategy(
        {
            clientID: 'FACEBOOK_APP_ID',
            clientSecret: 'FACEBOOK_APP_SECRET',
            callbackURL: 'http://localhost:3000/auth/facebook/callback',
        },
        (accessToken, refreshToken, profile, done) => {
            // Save or retrieve user data from database
            return done(null, profile);
        }
    )
);

// Google Strategy
passport.use(
    new GoogleStrategy(
        {
            clientID: 'GOOGLE_CLIENT_ID',
            clientSecret: 'GOOGLE_CLIENT_SECRET',
            callbackURL: 'http://localhost:3000/auth/google/callback',
        },
        (accessToken, refreshToken, profile, done) => {
            // Save or retrieve user data from database
            return done(null, profile);
        }
    )
);

// Twitter Strategy
passport.use(
    new TwitterStrategy(
        {
            consumerKey: 'TWITTER_CONSUMER_KEY',
            consumerSecret: 'TWITTER_CONSUMER_SECRET',
            callbackURL: 'http://localhost:3000/auth/twitter/callback',
        },
        (token, tokenSecret, profile, done) => {
            // Save or retrieve user data from database
            return done(null, profile);
        }
    )
);

module.exports = passport;
