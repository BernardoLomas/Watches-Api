import { Request, Response } from "express";
import { CheckoutService } from "../services/checkout.service";

export class CheckoutController {
  static async process(req: Request, res: Response) {
    try {
      const result = await CheckoutService.process(req.body);
      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }
}
