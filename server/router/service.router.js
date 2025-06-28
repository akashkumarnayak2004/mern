import express from 'express';
import { services } from '../controllers/service.controller.js';



const router = express.Router();

// Create a new service
router.get("/service",services);

export default router;