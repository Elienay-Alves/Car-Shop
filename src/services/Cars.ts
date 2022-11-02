import { ICar, CarZodSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import APIService from './API';

class CarsService extends APIService<ICar> {
  constructor(model: IModel<ICar>, schema = CarZodSchema) {
    super(model, schema);
  }
} 

export default CarsService;