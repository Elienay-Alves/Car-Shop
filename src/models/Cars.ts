import { Schema, model as mongooseCreateModel } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import db from './db';

const mongooseCarSchema = new Schema<ICar>({
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
  doorsQty: {
    type: Number,
    required: true,
  },
  seatsQty: {
    type: Number,
    required: true,
  },
}, {
  versionKey: false,
});

class CarsModel extends db<ICar> {
  constructor(model = mongooseCreateModel('Cars', mongooseCarSchema)) {
    super(model);
  }
}

export default CarsModel;