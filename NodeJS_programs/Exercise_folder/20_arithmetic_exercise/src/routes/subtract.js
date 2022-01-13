import express from 'express';
import { subtract } from '../controller/subtract.js';
const router = express.Router();
router.get( '/subtract',subtract);
export default router;
