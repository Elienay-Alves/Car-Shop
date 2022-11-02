import { Schema, model as mongooseCreateModel } from 'mongoose';
import { IMotorcycle } from '../interfaces/IMotorcycles';
import db from './db';

const mongooseMotorcycleSchema = new Schema<IMotorcycle>({
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  buyValue: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true, 
  },
  engineCapacity: {
    type: Number,
    required: true,
  },
}, {
  versionKey: false,
});

class MotorcyclesModel extends db<IMotorcycle> {
  constructor(model = mongooseCreateModel('Motorcycles', mongooseMotorcycleSchema)) {
    super(model);
  }
}

export default MotorcyclesModel;