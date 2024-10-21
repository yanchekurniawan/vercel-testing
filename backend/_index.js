import express from "express";
import { getUser, login } from "./controller.js";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
/* import connectToMongoDB from "./db/dbConfig.js"; */

dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.get("/", (req, res) => {
  res.json("Hello Guys");
});

app.get("/products", async (req, res) => {
  try {
    const data = await prisma.product.findMany();
    res.json(data);
  } catch (error) {
    res.json(error);
  }
});

/* app.get("/user", getUser);
app.post("/login", login); */

app.listen(process.env.POST, () => {
  console.log("Server On");
  /*   connectToMongoDB(); */
});
