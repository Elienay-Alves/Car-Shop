import { z } from 'zod';

export const VehicleZodSchema = z.object({
  model: z
    .string()
    .min(3),
  year: z
    .number()
    .min(1900)
    .max(2022)
    .int(),
  color: z
    .string()
    .min(3),
  buyValue: z
    .number()
    .int(),
});

export type IVehicle = z.infer<typeof VehicleZodSchema>;