import express from 'express';
import cors from 'cors';
import billRoutes from './routes/billRoutes';
import ecocashRoutes from './routes/ecocash';
import { handleEcocashCallback } from './controllers/handleCallbacks';
import dotenv from 'dotenv';
import e from 'express';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) =>{
    res.send('Hello from server')
});

app.use('/api', billRoutes);
app.use('/payments/eco-callback', handleEcocashCallback);

app.listen(PORT, () =>{
    console.log('Server is running on' , PORT)
})