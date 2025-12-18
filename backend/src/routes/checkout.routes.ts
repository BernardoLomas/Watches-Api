import { Router } from 'express'
import { CheckoutController } from '../controllers/checkout.controller'

const checkoutRoutes = Router()
checkoutRoutes.post('/', CheckoutController.process)

export default checkoutRoutes