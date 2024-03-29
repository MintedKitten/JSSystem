import { JSException } from "./JSException.mjs";
class IllegalArgumentException extends JSException {
  /**
   * The constructor of class IllegalArgumentException. When argument was passed incorrectly.
   * @param classFunction {Function} The class or arrow class of the throwable. Only for class inheritance.
   * @param message {string} The message in details
   */
  constructor({ classFunction, message }, serialBigInt) {
    super(
      {
        classFunction: classFunction ?? IllegalArgumentException,
        message
      },
      serialBigInt
    );
  }
}
export {
  IllegalArgumentException
};