export const CAR = {
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
}

export const CAR_WITH_ID = {
  _id: "4edd40c86762e0fb12000003",
  ...CAR,
}

export const updatedCar = { ...CAR, model: 'Jeep Renegade' };

export const updatedCarWithId = { _id: CAR_WITH_ID._id, ...updatedCar };