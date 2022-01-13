import express from 'express';
import { add } from '../controller/add.js';
const router = express.Router();
router.get( '/add',add);
export default router;
