import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';

import router from './router/auth.router.js'; 
import contactRouter from './router/contact-router.js';
import serviceRouter from './router/service.router.js';  // Import the service router
import adminRouter from './router/admin-router.js'; // Import the admin router



import Connectdb from './utils/db.js';        


const app = express();


const corsOptions = {
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH'],
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

Connectdb();
app.use("/api/auth", router);
app.use("/api/form", contactRouter); // Use the contact router
app.use("/api/data", serviceRouter);
app.use("/api/admin", adminRouter); // Use the service router for admin routes

 // Use the error middleware
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
 