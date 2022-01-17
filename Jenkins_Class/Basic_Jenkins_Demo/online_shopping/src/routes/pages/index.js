import express from 'express';
import {getHomePage} from '../../controller/pages/index.js'

const router = express.Router();

router.get( '/', getHomePage);

export default router;