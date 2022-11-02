import { IModel } from '../interfaces/IModel';
import { IMotorcycle, MotorcyclesZodSchema } from '../interfaces/IMotorcycles';
import API from './API';

class Motorcycle extends API<IMotorcycle> {
  constructor(model: IModel<IMotorcycle>, schema = MotorcyclesZodSchema) {
    super(model, schema);
  }
}

export default Motorcycle;