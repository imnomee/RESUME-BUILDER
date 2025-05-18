import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

import { connectDB } from './config/db.js';
import authRoutes from './routes/auth.Route.js';
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(
    cors({
        origin: process.env.CLIENT_RUL || '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    })
);

app.use(express.json());

app.use('/api/v1/auth', authRoutes);

app.use(
    '/uploads',
    express.static(path.join(__dirname, 'uploads'), {
        setHeaders: (res, path) => {
            res.set('Access-Control-Allow-Origin', 'http://localhost:5173');
        },
    })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on: http://localhost:${PORT}`);
});
