const express = require("express");
const mongoose = require("mongoose");
const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const shortid = require("shortid");
const GarageSale = mongoose.model("GarageSale");
const keys = require("../config/keys");

const router = express.Router();

//Setting up aws
const s3 = new aws.S3({
  accessKeyId: keys.AWSAccessKeyId,
  secretAccessKey: keys.AWSSecretKey
});

//Setting up multer and multer s3
const upload = multer({
  limits: { fileSize: 5242880 },
  fileFilter: function fileFilter(req, file, cb) {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
  storage: multerS3({
    s3: s3,
    bucket: "akpo-garagesale",
    metadata: function(req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function(req, file, cb) {
      console.log(file);
      cb(
        null,
        keys.garageSaleStoragePath.concat(
          shortid.generate(),
          "_",
          file.originalname
        )
      );
    }
  })
});

//Routes
router.get("/api/garagesales", (req, res) => {
  GarageSale.find({}, (err, garagesales) => {
    if (!err) {
      res.send(garagesales);
    }
  });
});

router.post(
  "/api/garagesales",
  upload.array("garageSalePhotos", 5),
  (req, res, next) => {
    const newGarageSale = new GarageSale({
      location: req.body.location,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      description: req.body.description
    });

    console.log(newGarageSale);

    var fileNames = [];
    if (req.files.length > 0) {
      req.files.forEach(file => {
        fileNames.push(file.key);
      });
      newGarageSale.images = fileNames;
    }

    newGarageSale.save((err, createdGarageSale) => {
      if (!err) {
        res.send("Upload Successful");
      }
    });
  }
);

router.get("/api/garagesales/:id", (req, res) => {
  GarageSale.findById(req.params.id, (err, foundGarageSale) => {
    if (!err) {
      res.send(foundGarageSale);
    }
  });
});

module.exports = router;
