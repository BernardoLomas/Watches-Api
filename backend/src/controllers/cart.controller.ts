import { Request, Response } from 'express'
import { CartService } from '../services/cart.service'

export class CartController {
    static async addItem(req: Request, res: Response) {
        try {
            const item = await CartService.addItem(req.body)
            return res.status(201).json(item)
            
        } catch (error: any) {
            return res.status(400).json({ message: error.message })
        }
    }

    static async updateItem(req: Request, res: Response) {
        try {
            const item = await CartService.updateItem(req.body)
            return res.status(201).json(item)
        } catch (error: any) {
            return res.status(400).json({ message: error.message })
        }
    }

    static async removeItem(req: Request, res: Response) {
        return res.status(204).send()
    }
}
