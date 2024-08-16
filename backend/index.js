import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json("Hello Guys");
});

app.listen(5000, () => {
  console.log("Server On");
});
