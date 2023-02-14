import { JSError } from "./JSError.mjs";
class ClassNotFoundError extends JSError {
  /**
   * The constructor of class ClassNotFoundError. When class lookup in JSSystem found nothing
   * @param classFunction {Function} The class or arrow class of the throwable. Only for class inheritance.
   * @param message {string} The message in details
   */
  constructor({ classFunction, message }, serialBigInt) {
    super(
      {
        classFunction: classFunction ?? ClassNotFoundError,
        message
      },
      serialBigInt
    );
  }
}
export {
  ClassNotFoundError
};