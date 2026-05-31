const maths = require("./module/maths");
const news = require("./data/news");
console.log(maths.add(3, 5));
console.log(maths.divide(15, 5));
console.log(maths.even(5));
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.json("HII,I AM BACK");
});
app.get("/name", (req, res) => {
  res.json("HII,I AM ANKITA");
});
app.get("/news", (req, res) => {
  res.json(news);
});
app.listen(3000, () => {
  console.log("Server Running on localhost:3000");
});
