import express from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const app = express();
const prisma = new PrismaClient();

const PORT = process.env.PORT;

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.json("Hello");
});

app.post("/products", async (req, res) => {
  const { name, price, description } = req.body;
  await prisma.product.create({
    data: {
      name,
      price,
      description,
    },
  });
  res.status(200).json("Product Added");
});

app.get("/products", async (req, res) => {
  const data = await prisma.product.findMany();
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
