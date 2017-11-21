const passport = require("passport");
const mongoose = require("mongoose");
const googleStrategy = require("passport-google-oauth20").Strategy;
const twitterStrategy = require("passport-twitter").Strategy;
const facebookStrategy = require("passport-facebook").Strategy;
const keys = require("../config/keys");

const User = mongoose.model("User");

passport.serializeUser((createdUser, done) => {
  done(null, createdUser.id);
});

passport.deserializeUser((userID, done) => {
  User.findById(userID).then(foundUser => {
    done(null, foundUser);
  });
});

//google strategy service setup
passport.use(
  new googleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      //change this later on to prepopulate sign up form instead of creating new user immediately
      const foundUser = await User.findOne({ googleID: profile.id });
      if (foundUser) {
        //user already exist with the google id
        return done(null, foundUser);
      }
      const createdUser = await new User({
        username: profile.displayName,
        email: profile.emails[0].value,
        googleID: profile.id
      }).save();
      done(null, createdUser);
    }
  )
);

//twitter strategy service setup
passport.use(
  new twitterStrategy(
    {
      consumerKey: keys.twitterconsumerKey,
      consumerSecret: keys.twitterconsumerSecret,
      callbackURL: "/auth/twitter/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken);
      console.log(refreshToken);
      console.log(profile);
    }
  )
);

//facebook strategy service setup
passport.use(
  new facebookStrategy(
    {
      clientID: keys.facebookClientID,
      clientSecret: keys.facebookClientSecret,
      callbackURL: "/auth/facebook/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken);
      console.log(refreshToken);
      console.log(profile);
    }
  )
);
