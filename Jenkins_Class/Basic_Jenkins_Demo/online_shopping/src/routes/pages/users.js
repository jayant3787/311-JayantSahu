
import express from 'express';
import { getUsersPage } from '../../controller/pages/users.js';


const router = express.Router();

router.get( '/', getUsersPage);

export default router;