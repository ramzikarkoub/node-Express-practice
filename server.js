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
app.use(express.urlencoded({ extended: false }));

// ROUTES

// New Book Route
app.get("/books/new", (req, res) => {
  res.render("./books/new.ejs");
});

// Create Route
app.post("/books", async (req, res) => {
  //   console.log(req.body);

  const newBook = await Book.create(req.body);
  if (!newBook) return res.status(400);
  res.status(201).redirect("./books/new");
});

// PORT CONNECTION
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
