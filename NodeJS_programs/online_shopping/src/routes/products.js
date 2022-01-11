import express from 'express';
import { getProducts } from '../controller/products.js';
const router = express.Router();

// Send a message when client requests for /products
router.get( '/products', getProducts);
export default router;