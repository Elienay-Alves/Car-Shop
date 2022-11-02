import StatusCodes from './statusCodes';

class ErrorMessage extends Error {
  constructor(
    message: string,
    public statusCode: StatusCodes,
  ) {
    super(message);
  }
}
export default ErrorMessage;