import { Throwable } from "./Throwable.mjs";
class JSException extends Throwable {
  /**
   * The constructor of class JSException. A generic exception
   * @param classFunction {Function} The class or arrow class of the throwable. Only for class inheritance.
   * @param message {string} The message in details.
   */
  constructor({ classFunction, message }, serialBigInt) {
    super({ classFunction: JSException, message }, serialBigInt);
  }
}
export {
  JSException
};