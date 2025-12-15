import { Request, Response } from 'express'
import { ProductService } from '../services/product.service'

export class ProductController {
    static async list(req: Request, res: Response){
        const products = await ProductService.list()
        return res.json(products)
    }
}