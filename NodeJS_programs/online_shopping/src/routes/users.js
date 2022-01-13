import express from 'express';
import { getUsers, getUserById,postUser,putUser,deleteUser } from '../controller/users.js';
const router = express.Router();

// Send a message when client requests for /users
router.get( '/', getUsers);
router.get( '/:_id',getUserById);
router.post( '/', postUser);
router.put( '/:_id', putUser);
router.delete('/:_id',deleteUser);


export default router;