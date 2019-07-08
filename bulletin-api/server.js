const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const Sequelize = require("sequelize");

const app = express();

// Use RDS
const sequelize = new Sequelize("postgres://alpha:@example.com:5432/dbname");
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

app.use(helmet());
app.use(bodyParser.json());

// API routes for all the APIS
const mainRoutes = require("./routes/main");
app.use("/api", mainRoutes);

// Listening on PORT
app.listen(process.env.PORT, err => {
  if (err) {
    console.log(err);
  }

  console.log(`connected to the port ${process.env.PORT}`);
});
