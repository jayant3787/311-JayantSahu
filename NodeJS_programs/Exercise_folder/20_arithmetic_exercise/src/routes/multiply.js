import express from 'express';
import { multiply } from '../controller/multiply.js';
const router = express.Router();
router.get( '/multiply',multiply);
export default router;
