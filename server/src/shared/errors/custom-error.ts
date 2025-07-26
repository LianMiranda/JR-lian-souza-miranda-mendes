export class CustomError extends Error {
  public readonly statusCode: number;

  constructor(message: string, statusCode: number = 400) {
    super(message);
    this.name = 'CustomError';
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}
