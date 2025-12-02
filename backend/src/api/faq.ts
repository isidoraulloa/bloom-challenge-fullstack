import Faq from "../services/faq";
import { Request, Response, NextFunction } from "express";

const listFaq = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const faq = await Faq.list();
    res.status(201).json(faq);
  } catch (error) {
    console.error("Error fetching brands:", error);
    res.status(500).json(error);
  }
  next();
};

export { listFaq };
