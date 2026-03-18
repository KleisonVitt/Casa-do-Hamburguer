import { Router } from "express";
import { login, register, auth, logout } from "./controller/userController.js";
import { authMiddleware } from "./middleware/authMiddleware.js";
import { getAllProducts } from "./controller/ProductController.js";
import { deleteProduct } from "./controller/ProductController.js";

export const router = Router();

// Rotas do Usuário
router.post("/register", register);
router.post("/login", login);
router.get("/me", authMiddleware, auth);
router.post("/logout", authMiddleware, logout);

// Rotas do Produto
router.get("/product", getAllProducts);
router.delete("/product/:id", authMiddleware, deleteProduct);
