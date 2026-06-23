const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.static("./"));

let customers = [];

app.post("/api/customers", (req, res) => {
  customers.push(req.body);
  res.json({ success: true });
});

app.get("/api/customers", (req, res) => {
  res.json(customers);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});