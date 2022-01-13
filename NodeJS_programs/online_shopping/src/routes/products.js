import express from 'express';
import { getProducts, getProductById,postProduct,putProduct,deleteProduct} from '../controller/products.js';
const router = express.Router();

// Send a message when client requests for /products
router.get( '/products', getProducts);
router.get( '/products/:_id', getProductById);
router.post( '/products', postProduct);
router.put( '/products/:_id', putProduct);
router.delete('/products/:_id',deleteProduct);



export default router;