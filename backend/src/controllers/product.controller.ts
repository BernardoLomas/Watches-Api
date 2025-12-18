import { Request, Response } from "express";
import { ProductService } from "../services/product.service";

export class ProductController {
  static async list(req: Request, res: Response) {
    try {
      const products = await ProductService.list();
      return res.status(200).json(products);
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({
        message: "Failed to fetch products",
      });
    }
  }
}
