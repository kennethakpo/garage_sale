const express = require("express"),
  mongoose = require("mongoose"),
  passport = require("passport"),
  bodyParser = require("body-parser"),
  keys = require("./config/keys");

//requiring models
require("./models/user");
require("./models/garageSale");
require("./models/comment");

//requiring the passport file
require("./services/passport");

//requiring routes
const authRoutes = require("./routes/authRoutes");
const garageSaleRoutes = require("./routes/garageSaleRoutes");

//connecting to the mongoode database
mongoose.connect(keys.mongoURI, {
  useMongoClient: true
});

const app = express();

//allow the create-react-app to be able to communicate with the server in dev mode
app.use(function(req, res, next) {
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

//setting up body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

app.use(garageSaleRoutes);

//starting the node server
const PORT = process.env.PORT || 5000;
app.listen(PORT, process.env.IP, function() {
  console.log("GarageSale is online");
});
