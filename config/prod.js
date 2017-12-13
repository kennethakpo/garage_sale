module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,

  twitterconsumerKey: "", //process.env.TWITTER_CONSUMER_KEY,
  twitterconsumerSecret: "", //process.env.TWITTER_CONSUMER_SECRET,

  facebookClientID: "", //process.env.FACEBOOK_CLIENT_ID,
  facebookClientSecret: "", //process.env.FACEBOOK_CLIENT_SECRET,

  mongoURI: process.env.MONGO_URI,

  sessionSecret: process.env.SESSION_SECRET,

  AWSAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
  AWSSecretKey: process.env.AWS_SECRET_KEY,

  garageSaleStoragePath: process.env.GARAGE_SALE_STORAGE_PATH
};
