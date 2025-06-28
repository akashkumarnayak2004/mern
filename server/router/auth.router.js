import express from 'express';
import {authMiddleware} from '../middlewares/auth-middleware.js';  // Make sure to add `.js`
import { home, register, login,user } from '../controllers/auth.controllers.js';  // Make sure to add `.js`
// import validate from '../middlewares/validate-middleware.js';
 // Make sure to add `.js`

const router = express.Router();

router.get("/", home);
router.post("/register", register);
router.post("/login", login);
router.get("/user", authMiddleware, user);

export default router;
//   "server": "nodemon server.js"
