import express from "express";
import { getUser } from "./controller";

const app = express();

app.get("/", (req, res) => {
  res.json("Hello Guys");
});

/* app.get("/user", getUser); */

app.listen(5000, () => {
  console.log("Server On");
});
