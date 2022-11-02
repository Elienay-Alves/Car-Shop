import { z } from 'zod';
import ErrorMessage from './errorMessage';
import StatusCodes from './statusCodes';

const bodyValidation = (
  obj: unknown, 
  schema: z.ZodObject<z.ZodRawShape>,
  mainSchema: z.ZodObject<z.ZodRawShape>,
): void => {
  const zodSchemas = mainSchema.merge(schema);
  const parsedObj = zodSchemas.safeParse(obj);
  let errorMessage;

  if (!parsedObj.success) {
    errorMessage = parsedObj.error.issues[0].message;
    throw new ErrorMessage(
      errorMessage,
      StatusCodes.BAD_REQUEST,
    );
  }
};

export default bodyValidation;