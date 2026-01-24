import { Router } from "express";
import { login, register, auth, logout } from "./controller/userController.js";

export const router = Router();

// Rotas do Usuário
router.post("/register", register);
router.post("/login", login);
router.get("/me", auth);
router.post("/logout", logout);
