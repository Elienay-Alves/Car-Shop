import express from 'express';
import carsRouter from './routes/Cars';
import motorcyclesRouter from './routes/Motorcycles';
import Error from './middlewares/error';

const app = express();

app.use(express.json());

app.use('/cars', carsRouter);
app.use('/motorcycles', motorcyclesRouter);

app.use(Error);

export default app;
