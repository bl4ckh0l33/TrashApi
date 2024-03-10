const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Connecting to DB
mongoose.connect(
  "mongodb+srv://blackhole:pieropacheco02@alert.aj1zb8w.mongodb.net/?retryWrites=true&w=majority&appName=Alert",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Importing routes
const posts = require("./routes/posts");

// Routes
app.use("/api/posts", posts);

app.listen(8080, () => {
  console.log("escuchamdo");
});

module.exports = app;
