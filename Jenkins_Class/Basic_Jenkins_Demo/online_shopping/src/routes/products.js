import express from 'express';
import { getProducts, getProductById,postProduct,putProduct,deleteProduct,postReview,getReviews} from '../controller/products.js';
import { authenticate, authorize } from '../middleware/auth.js';
const router = express.Router();

// Send a message when client requests for /products
router.get( '/', getProducts);
router.get( '/:_id', getProductById);

// logged-in user
router.post( '/',authenticate, authorize(['admin']), postProduct);
router.put( '/:_id',authenticate,authorize(['admin']), putProduct);
router.delete('/:_id',authenticate,authorize(['admin']), deleteProduct);

// any user
router.get('/:_id/reviews', getReviews)

// loggged-in user
router.post('/:_id/reviews',authenticate,authorize(['customer']), postReview);



export default router;