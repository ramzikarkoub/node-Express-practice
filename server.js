// DEPENDENCIES
// Load Express
const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const Book = require("./models/book");

// MIDDLEWARE
// Connect MongoDB
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}`);
});

// ROUTES

// New Book Route
app.get("/books/new", (req, res) => {
  res.render("./books/new.ejs");
});

// PORT CONNECTION
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
