import { z } from 'zod';
import { IVehicle } from './IVehicle';

export const MotorcyclesZodSchema = z.object({
  category: z
    .enum(
      [
        'Street',
        'Custom',
        'Trail',
      ],
    ),
  engineCapacity: z
    .number()
    .int()
    .min(0)
    .max(2500),
});

export type IMotorcycle = z.infer<typeof MotorcyclesZodSchema> & IVehicle;