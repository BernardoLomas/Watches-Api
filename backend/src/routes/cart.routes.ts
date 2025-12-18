import { Router } from 'express'
import { CartController } from '../controllers/cart.controller'

const cartRoutes = Router()
cartRoutes.post('/items', CartController.addItem)
cartRoutes.put('/items/:productId', CartController.updateItem)
cartRoutes.delete('/item/:productId', CartController.removeItem)

export default cartRoutes