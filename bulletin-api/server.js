const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const logger = require("morgan");
const Sequelize = require("sequelize");

const app = express();

require("dotenv").config();

// Use RDS
const sequelize = new Sequelize(
  "bulletin",
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "postgres"
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

app.use(helmet());
app.use(logger("dev"));
app.use(bodyParser.json());

// API routes for all the APIS
const mainRoutes = require("./routes/main");
app.use("/api", mainRoutes);

// Listening on PORT
app.listen(process.env.PORT, err => {
  if (err) {
    console.log(err);
  }
  console.log(`Connected to PORT ${process.env.PORT}`);
});
