import { Router } from "express";
import { login, register } from "./controller/userController.js";

export const router = Router();

// Rotas do Usuário
router.post("/register", register);
router.post("/login", login);
