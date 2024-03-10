const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Posts = mongoose.model(
  "Posts",
  new Schema(
    {
      busPlate: Number,
      lastname: String,
      firstname: String,
      lat: Number,
      lng: Number,
    },
    { timestamps: true }
  )
);

module.exports = Posts;
