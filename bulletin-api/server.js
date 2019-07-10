// Libraries to run the API
const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const logger = require("morgan");
const cors = require("cors");

const app = express();

// Getting the environment variables from .env
require("dotenv").config();

// Express Middlewares
app.use(helmet());
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// API routes
const mainRoutes = require("./routes/main");
app.use("/api", mainRoutes);

// Listening on PORT
app.listen(process.env.PORT, err => {
  if (err) {
    console.log(err);
  }
  console.log(`Connected to PORT ${process.env.PORT}`);
});
