import { JSException } from "./JSException.mjs";
class UnsupportedOperationException extends JSException {
  /**
   * The constructor of class UnsupportedOperationException. When the method in class is not supported.
   * @param classFunction {Function} The class or arrow class of the throwable. Only for class inheritance.
   * @param message {string} The message in details
   */
  constructor({ classFunction, message }, serialBigInt) {
    super(
      {
        classFunction: classFunction ?? UnsupportedOperationException,
        message
      },
      serialBigInt
    );
  }
}
export {
  UnsupportedOperationException
};