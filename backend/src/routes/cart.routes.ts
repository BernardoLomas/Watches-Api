import { Router } from 'express'
import { CartController } from '../controllers/cart.controller'

const cartRoutes = Router()
cartRoutes.post('/items', CartController.addItem)

export default cartRoutes