import express from "express";
import { connection } from "./src/db.js";
import cors from "cors";
import { router } from "./src/routes.js";
import cookieParser from "cookie-parser";

const origin = "http://localhost:5173";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: origin,
    credentials: true,
  }),
);
app.use(router);
connection();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
