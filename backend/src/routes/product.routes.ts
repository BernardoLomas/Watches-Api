import { Router } from "express";
import { ProductController } from "../controllers/product.controller";

const productsRoutes = Router();
productsRoutes.get("/", ProductController.list);

export default productsRoutes;
