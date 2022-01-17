import express from 'express';
import { getUsers, getUserById,postUser,putUser,deleteUser } from '../controller/users.js';
import { authenticate,authorize } from '../middleware/auth.js';
const router = express.Router();

// Send a message when client requests for /users

// for looged in user role 'admin'
router.get( '/',authenticate,authorize(['admin']), getUsers);


router.get( '/:_id',getUserById);
router.post( '/', postUser);
router.put( '/:_id', putUser);
router.delete('/:_id',deleteUser);

// authorized for role 'admin'

// router.get('/',authenticate,getUsers)


export default router;