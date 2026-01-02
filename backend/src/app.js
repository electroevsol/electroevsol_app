import express from 'express';
import cors from 'cors';

const app = express();

app.use(
    cors({
        origin: 'http://localhost:5173',
    })
);
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

import contactRoute from './routes/contact.route.js';
import calculatorRoute from './routes/calculator.route.js';

app.use('/api/v1/contact', contactRoute);
app.use('/api/v1/calculator', calculatorRoute);

export default app;
