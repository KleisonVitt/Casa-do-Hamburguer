import type { Request, Response } from "express";
import { prisma } from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password, cep } = req.body;

    if (!name || !email || !password || !cep) {
      return res
        .status(400)
        .json({ message: "Todas as informações são obrigatórias" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (user?.email) {
      return res.status(409).json({ message: "E-mail já cadastrado" });
    }

    const newUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
        cep: cep,
      },
    });

    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ message: "Erro no serivdor" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email e senha são obrigatórios" });
    }

    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    const comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword) {
      return res.status(401).json({ message: "Usuário ou senha incorretos" });
    }

    const userInfo = {
      id: user.id,
      name: user.name,
      email: user.email,
      cep: user.cep,
    };

    if (!process.env.JWT_SECRET) {
      return;
    }

    const token = jwt.sign(userInfo, process.env.JWT_SECRET);

    res.cookie("user", token, {
      maxAge: 18000000,
    });

    return res.status(200).json(userInfo);
  } catch (error) {
    return res.status(500).json({ message: "Erro no servidor" });
  }
};

export const auth = async (req: Request, res: Response) => {
  try {
    const token = req.cookies.user;

    if (!process.env.JWT_SECRET) {
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      res.status(401).json({ message: "Usuário não autorizado" });
    }

    res.status(200).json(decoded);
  } catch (error) {
    return res.status(500).json({ message: "Erro no servidor" });
  }
};
