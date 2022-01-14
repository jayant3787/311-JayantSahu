import express from 'express';
import { getProducts, getProductById,postProduct,putProduct,deleteProduct,postReview,getReviews} from '../controller/products.js';
import { authenticate } from '../middleware/auth.js';
const router = express.Router();

// Send a message when client requests for /products
router.get( '/', getProducts);
router.get( '/:_id', getProductById);

// logged-in user
router.post( '/',authenticate, postProduct);
router.put( '/:_id',authenticate, putProduct);
router.delete('/:_id',authenticate, deleteProduct);

// any user
router.get('/:_id/reviews', getReviews)

// loggged-in user
router.post('/:_id/reviews',authenticate, postReview);



export default router;