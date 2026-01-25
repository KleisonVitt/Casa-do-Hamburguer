import { Router } from "express";
import { login, register, auth, logout } from "./controller/userController.js";
import { authMiddleware } from "./middleware/authMiddleware.js";

export const router = Router();

// Rotas do Usuário
router.post("/register", register);
router.post("/login", login);
router.get("/me", authMiddleware, auth);
router.post("/logout", authMiddleware, logout);
