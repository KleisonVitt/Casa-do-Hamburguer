import type { Request, Response } from "express";
import { prisma } from "../db.js";

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany();

    if (products.length === 0) {
      return res.status(404).json({ message: "Nenhum produto encontrado" });
    }

    res.json(products);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Erro no servidor" });
  }
};
