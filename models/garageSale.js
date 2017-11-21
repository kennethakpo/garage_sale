const mongoose = require("mongoose");

const garageSaleSchema = new mongoose.Schema({
  location: String,
  createdAt: { type: Date, Default: Date.now },
  startDate: Date,
  endDate: Date,
  description: String,
  images: [{ type: String }],
  creator: {
    id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    username: String
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }]
});

mongoose.model("GarageSale", garageSaleSchema);
