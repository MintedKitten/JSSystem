import { Throwable, Throwable_Contructor_Interface } from "./Throwable";
/**
 * JSS Error class. The base of every error.
 * Error are throwable that are usually not resolvable.
 * @class JSS.lang.JSError
 */
class JSError extends Throwable {
  /**
   * The constructor of class JSError. A generic error
   * @param classFunction {Function} The class or arrow class of the throwable. Only for class inheritance.
   * @param message {string} The message in details
   */
  constructor({ classFunction, message }: Throwable_Contructor_Interface) {
    super({ classFunction: JSError, message: message });
  }
}
export { JSError };
