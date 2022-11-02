import { Router } from 'express';
import CarsC from '../controllers/Cars';
import CarsM from '../models/Cars';
import CarsS from '../services/Cars';

const carsRouter = Router();

const carsM = new CarsM();
const carsS = new CarsS(carsM);
const carsC = new CarsC(carsS);

carsRouter.post('/', carsC.create);
carsRouter.get('/', carsC.read);
carsRouter.get('/:id', carsC.readOne);
carsRouter.put('/:id', carsC.update);
carsRouter.delete('/:id', carsC.delete);

export default carsRouter;