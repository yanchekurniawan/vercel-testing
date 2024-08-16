import axios from "axios";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json("Hello Guys");
});

app.get("/user", async (req, res) => {
  try {
    const response = await axios.get("https://reqres.in/api/users");
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(5000, () => {
  console.log("Server On");
});
