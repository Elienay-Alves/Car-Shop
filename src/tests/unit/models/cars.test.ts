import * as sinon from 'sinon';
import chai from 'chai';
import { Model } from 'mongoose';
import CarsM from '../../../models/Cars';
import { CAR, CAR_WITH_ID } from '../../data';
const { expect } = chai;

describe('Cars Route', () => {
  const carsModel = new CarsM();

  afterEach(async() => {
    sinon.restore();
  });

  describe('Should Create a car', () => {

    before(async () => {
      sinon.stub(Model, 'create').resolves(CAR_WITH_ID);
    });

    it('Should car be succesfully created', async () => {
      const createdCar = await carsModel.create(CAR);
      expect(createdCar).to.be.deep.equal(CAR_WITH_ID);
    });

  });

  describe('Should search all cars', () => {

    before(async () => {
      sinon.stub(Model, 'find').resolves([CAR_WITH_ID]);
    });

    it('Should all cars be succesfully found', async () => {
      const cars = await carsModel.read();
      expect(cars).to.be.deep.equal([CAR_WITH_ID]);
    });

  });
});