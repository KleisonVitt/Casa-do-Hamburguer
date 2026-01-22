import { Router } from "express";
import { login, register } from "./controller/userController.js";

export const router = Router();

// Rotas do Usuário
router.post("/register", login);
router.post("/login", register);
