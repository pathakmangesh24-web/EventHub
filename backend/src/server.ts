import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import eventRouter from './routes/event.js';

const app = express();
const PORT = Number(process.env.PORT || 3000);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/event-forms', eventRouter);

app.get('/api/health', (req, res) => res.json({ status: 'ok', message: 'Server is running' }));
app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on port ${PORT}`);
});
