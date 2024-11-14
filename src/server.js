import express from "express";
import { testConnection } from "./database/connection.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  testConnection();
  console.log("Servidor rodando!");
});
