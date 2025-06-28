
import express from 'express';
import { deletUser, getAllUsers, getAllUsersContact, getUserById, updateUserbyId } from '../controllers/admin-controller.js';
import {authMiddleware} from '../middlewares/auth-middleware.js';
import { adminMiddleware } from '../middlewares/admin-middleware.js';

const router = express.Router();

router.get("/users", authMiddleware,adminMiddleware,getAllUsers);
router.get("/contacts",authMiddleware,adminMiddleware,getAllUsersContact);
router.get("/users/:id",authMiddleware,adminMiddleware,getUserById);
router.patch("/users/update/:id",authMiddleware,adminMiddleware,updateUserbyId)
router.delete("/users/delete/:id",authMiddleware,adminMiddleware,deletUser);

export default router;