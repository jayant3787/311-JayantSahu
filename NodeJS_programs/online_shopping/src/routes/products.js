import express from 'express';
import { getProducts, getProductById,postProduct,putProduct,deleteProduct,postReview} from '../controller/products.js';
const router = express.Router();

// Send a message when client requests for /products
router.get( '/', getProducts);
router.get( '/:_id', getProductById);
router.post( '/', postProduct);
router.put( '/:_id', putProduct);
router.delete('/:_id',deleteProduct);

router.post('/:_id/reviews', postReview);



export default router;