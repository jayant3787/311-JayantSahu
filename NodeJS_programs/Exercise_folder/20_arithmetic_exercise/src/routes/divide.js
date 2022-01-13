import express from 'express';
import { divide } from '../controller/divide.js';
const router = express.Router();
router.get( '/divide',divide);
export default router;
