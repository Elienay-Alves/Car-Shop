import { isValidObjectId } from 'mongoose';
import ErrorMessage from './errorMessage';
import StatusCodes from './statusCodes';

const validateObjectId = (_id: string): void => {
  if (!isValidObjectId(_id)) {
    throw new ErrorMessage(
      'Id must have 24 hexadecimal characters',
      StatusCodes.BAD_REQUEST,
    );
  }
};

export default validateObjectId;