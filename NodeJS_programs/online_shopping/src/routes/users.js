import express from 'express';
import { getUsers } from '../controller/users.js';
const router = express.Router();

// Send a message when client requests for /users
router.get( '/users', getUsers)
export default router;