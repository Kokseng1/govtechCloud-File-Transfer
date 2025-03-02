const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/add", (req, res) => {
  const num1 = parseFloat(req.body.num1) || 0;
  const num2 = parseFloat(req.body.num2) || 0;
  res.json({ result: num1 + num2 });
});

app.post("/subtract", (req, res) => {
  const num1 = parseFloat(req.body.num1) || 0;
  const num2 = parseFloat(req.body.num2) || 0;
  res.json({ result: num1 - num2 });
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = { app, server };
