import { z } from 'zod';
import ErrorMessage from '../utils/errorMessage';
import { IModel } from '../interfaces/IModel';
import IService from '../interfaces/IServices';
import { VehicleZodSchema } from '../interfaces/IVehicle';
import StatusCodes from '../utils/statusCodes';
import bodyValidation from '../utils/bodyValidation';
import objectIDValidation from '../utils/objectIDValidation';

const NOT_FOUND_MESSAGE = 'Object not found';

abstract class APIService<T> implements IService<T> {
  private _model: IModel<T>;
  private _zodSchema: z.ZodObject<z.ZodRawShape>;

  constructor(model: IModel<T>, zodSchema: z.ZodObject<z.ZodRawShape>) {
    this._model = model;
    this._zodSchema = zodSchema; 
  }

  public async create(obj: T) {
    bodyValidation(obj, this._zodSchema, VehicleZodSchema);
    const createdDocument = await this._model.create(obj);
    return { code: StatusCodes.CREATED, data: createdDocument };
  }

  public async read() {
    const documents = await this._model.read();
    return { code: StatusCodes.OK, data: documents };
  }

  public async readOne(_id: string) {
    objectIDValidation(_id);
    const document = await this._model.readOne(_id);
    if (!document) throw new ErrorMessage(NOT_FOUND_MESSAGE, StatusCodes.NOT_FOUND);
    return { code: StatusCodes.OK, data: document };
  }

  public async update(_id: string, obj: T) {
    bodyValidation(obj, this._zodSchema, VehicleZodSchema);
    objectIDValidation(_id);
    const updatedDocument = await this._model.update(_id, obj);
    if (!updatedDocument) throw new ErrorMessage(NOT_FOUND_MESSAGE, StatusCodes.NOT_FOUND);
    return { code: 200, data: { _id, ...obj } };
  }

  public async delete(_id: string) {
    objectIDValidation(_id);
    const deletedDocument = await this._model.delete(_id);
    if (!deletedDocument) throw new ErrorMessage(NOT_FOUND_MESSAGE, StatusCodes.NOT_FOUND);
    return { code: StatusCodes.NO_CONTENT };
  }
}

export default APIService;