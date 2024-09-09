const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const connectDB = require("./config/db");
const Product = require("./models/productModel");

const app = express();
const port = process.env.PORT || 3001;

connectDB();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("test");
});

app.use("/api/product", require("./routes/productRoutes"));

app.listen(port, () => {
  console.log(`Node API app is running on port ${port}`);
});

module.exports = app;
