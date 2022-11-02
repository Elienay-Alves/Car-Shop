import { z } from 'zod';
import { IVehicle } from './IVehicle';

export const CarZodSchema = z.object({
  doorsQty: z
    .number()
    .min(2)
    .max(4)
    .int(),
  seatsQty: z
    .number()
    .min(2)
    .max(7)
    .int(),
});

export type ICar = z.infer<typeof CarZodSchema> & IVehicle;