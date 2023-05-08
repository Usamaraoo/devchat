const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const UserApies = require("./apies/userApies");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5001;
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
mongoose
  .connect(process.env.MONGODB_URI, {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error(err);
  });

app.use("/api", UserApies);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
