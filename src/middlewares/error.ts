import { NextFunction, Request, Response } from 'express';
import ErrorMessage from '../utils/errorMessage';
import StatusCodes from '../utils/statusCodes';

const errorHandler = (
  error: ErrorMessage,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (!error.statusCode) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Server error.',
    });
  }

  const { message, statusCode } = error;
  return res.status(statusCode).json({ error: message });
};

export default errorHandler;