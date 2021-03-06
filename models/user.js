const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    googleID: String,
    twitterID: String,
    facebookID: String
});

mongoose.model("User", userSchema);