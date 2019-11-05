class AppError extends Error {
    constructor(error, redirect= "/") {
      super();
      Error.captureStackTrace(this, this.constructor);
      this.error = error;
      this.redirect = redirect
    }
  }
  
  module.exports = AppError;