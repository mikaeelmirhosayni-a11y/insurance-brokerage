const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("."));

let customers = [];

app.get("/api/customers",(req,res)=>{
  res.json(customers);
});

app.post("/api/customers",(req,res)=>{
  customers.push(req.body);
  res.json({ok:true});
});

app.listen(process.env.PORT || 3000);