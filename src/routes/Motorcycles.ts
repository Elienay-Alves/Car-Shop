import { Router } from 'express';
import MotorcyclesC from '../controllers/Motorcycles';
import MotorcyclesM from '../models/Motorcycles';
import MotorcyclesS from '../services/Motorcycles';

const motorcyclesRouter = Router();

const motorcyclesM = new MotorcyclesM();
const motorcyclesS = new MotorcyclesS(motorcyclesM);
const motorcyclesC = new MotorcyclesC(motorcyclesS);

motorcyclesRouter.post('/', motorcyclesC.create);
motorcyclesRouter.get('/', motorcyclesC.read);
motorcyclesRouter.get('/:id', motorcyclesC.readOne);
motorcyclesRouter.put('/:id', motorcyclesC.update);
motorcyclesRouter.delete('/:id', motorcyclesC.delete);

export default motorcyclesRouter;