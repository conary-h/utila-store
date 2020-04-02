// centralized error object that derives from Node’s Error
function AppError(name, httpCode, description, isOperational) {
  Error.call(this);
  Error.captureStackTrace(this);
  this.name = name;
  //...other properties assigned here
};

AppError.prototype = Object.create(Error.prototype);
AppError.prototype.constructor = AppError;

/* Example: client throwing an exception

if(user == null) {
  throw new AppError(commonErrors.resourceNotFound, commonHTTPErrors.notFound, 'further explanation', true)
}
*/

module.exports.AppError = AppError;
