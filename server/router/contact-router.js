import express from 'express';

import {contactForm} from '../controllers/contact-controller.js'; // Make sure to add `.js`  
const router = express.Router();

router.post("/contact", contactForm);



export default router;