import express from "express";
import { getUser, login } from "./controller.js";
import dotenv from "dotenv";
import connectToMongoDB from "./db/dbConfig.js";

const app = express();

dotenv.config();

app.get("/", (req, res) => {
  res.json("Hello Guys");
});

app.get("/user", getUser);
app.post("/login", login);

app.listen(process.env.POST, () => {
  console.log("Server On");
  connectToMongoDB();
});
