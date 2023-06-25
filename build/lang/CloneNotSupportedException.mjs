import { JSException } from "./JSException.mjs";
class CloneNotSupportedException extends JSException {
  /**
   * The constructor of class CloneNotSupportedException. When an object does not support the interface ICloneable.
   * @param classFunction {Function} The class or arrow class of the throwable. Only for class inheritance.
   * @param message {string} The message in details
   */
  constructor({ classFunction, message }, serialBigInt) {
    super(
      {
        classFunction: classFunction ?? CloneNotSupportedException,
        message
      },
      serialBigInt
    );
  }
}
export {
  CloneNotSupportedException
};