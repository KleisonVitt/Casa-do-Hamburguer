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

export const deleteProduct = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  try {
    const { user } = req;

    if (!user?.admin) {
      res.status(403).json({
        message: "Usuário não autorizado.",
      });
      return;
    }

    const { id } = req.params;

    if (!id) {
      res.status(400).json({ message: "ID não encontrado." });
      return;
    }

    const deletedProduct = await prisma.product.delete({
      where: {
        id: id,
      },
    });

    res.json(id);
  } catch (error: any) {
    if (error.code === "P2025") {
      console.error(error);
      res.json({ message: "Produto não encontrado." });
      return;
    }

    res.status(500).json({ message: "Erro no servidor" });
    return;
  }
};
