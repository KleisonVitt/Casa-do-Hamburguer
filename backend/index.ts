import express, { type Request, type Response } from "express";
import { connection } from "./src/db.js";
import cors from "cors";
import { router } from "./src/routes.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);
connection();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
