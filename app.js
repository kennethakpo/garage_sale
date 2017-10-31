//requiring express mongoose and the keys file
const express = require("express"),
  mongoose = require("mongoose"),
  passport = require("passport"),
  keys = require("./config/keys");

//requiring all models from the models directory
require("./models/user"),
  require("./models/garageSalePost"),
  require("./models/comment");

//requiring the passport file in the config directory
require("./services/passport");

//requiring routes from the routes directory
const authRoutes = require("./routes/authRoutes");

//connecting to the mongoode database
mongoose.connect(keys.mongoURI, {
  useMongoClient: true
});

//exec express to create app
const app = express();

//setting up app to use express session
app.use(
  require("express-session")({
    secret: keys.sessionSecret,
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

//setting up app to use routes from the routes directories
app.use("/auth", authRoutes);

app.get("/api/current_user", (req, res) => {
  res.send(req.user);
});

app.get("/api/logout", (req, res) => {
  req.logout();
  res.send(req.user);
});

//starting the node server in dev and prod by using PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, process.env.IP, function() {
  console.log("GarageSale is online");
});
