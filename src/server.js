// index.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = 4000;

app.use(express.json());
app.use("/static", express.static(path.join(__dirname, "..", "public")));

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.get("/about", (req, res) => {
  res.send("This is my about route..... ");
});

app.post("/register", (req, res) => {
  const body = req.body;
  res.status(201).send(body);
});

// Export the Express API
module.exports = app;
