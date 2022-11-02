import * as sinon from 'sinon';
import chai from 'chai';
import { NextFunction, Request, Response } from 'express';
import CarsM from '../../../models/Cars';
import CarsS from '../../../services/Cars';
import CarsC from '../../../controllers/Cars';
import StatusCodes from '../../../utils/statusCodes';
import { CAR, CAR_WITH_ID } from '../../data';
const { expect } = chai;

describe('Cars Controller', () => {
  const carsM = new CarsM();
  const carsS = new CarsS(carsM);
  const carsC = new CarsC(carsS);

  const serverError = Error('Server error.');

  const req = {} as Request;
  const res = {} as Response;
  let next = new Function

  after(async () => {
    sinon.restore();
  });

  describe('Should create a car', () => {
    before(async () => {
      sinon.stub(carsS, 'create')
      .onCall(0).resolves({
        code: StatusCodes.CREATED,
        data: CAR_WITH_ID,
      })
      .onCall(1).throws(serverError)

      req.body = CAR;
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      next = sinon.stub();
    });

    it('Car should be successfully created', async () => {
      await carsC.create(req, res, next as NextFunction);
      expect((res.status as sinon.SinonStub).calledWith(StatusCodes.CREATED)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(CAR_WITH_ID)).to.be.true;
    });

    it('Should return server error', async () => {
      await carsC.create(req, res, next as NextFunction);
      expect((next as sinon.SinonStub).calledWith(serverError)).to.be.true;
    });

  });

  describe('Should search all cars', () => {

    before(async () => {
      sinon.stub(carsS, 'read')
        .onCall(0).resolves({
          code: StatusCodes.OK,
          data: [CAR_WITH_ID],
        })
        .onCall(1).throws(serverError);

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      next = sinon.stub();
    });

    it('Cars should be successfully found', async () => {
      await carsC.read(req, res, next as NextFunction);
      expect((res.status as sinon.SinonStub).calledWith(StatusCodes.OK)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith([CAR_WITH_ID])).to.be.true;
    });

    it('Should return server error', async () => {
      await carsC.read(req, res, next as NextFunction);
      expect((next as sinon.SinonStub).calledWith(serverError)).to.be.true;
    });

  });
});