import express from "express";
import { connection } from "./src/db.js";
import { prisma } from "./src/db.js";

const app = express();
app.use(express.json());
connection();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findFirst({
    where: {
      email: email,
      password: password,
    },
  });

  res.json(user);
});
