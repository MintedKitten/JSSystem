import { Throwable } from "./Throwable.mjs";
class JSError extends Throwable {
  /**
   * The constructor of class JSError. A generic error
   * @param classFunction {Function} The class or arrow class of the throwable. Only for class inheritance.
   * @param message {string} The message in details
   */
  constructor({ classFunction, message }) {
    super({ classFunction: JSError, message });
  }
}
export {
  JSError
};