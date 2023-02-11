import { JSError } from "./JSError";
import { Throwable_Contructor_Interface } from "./Throwable";
/**
 * The JS Error for when looking up a class in {JSSystemGetCallClasses}
 * @class JSS.lang.ClassNotFoundError
 * @see JSSystemGetCallClasses
 */
class ClassNotFoundError extends JSError {
  /**
   * The constructor of class ClassNotFoundError. When class lookup in JSSystem found nothing
   * @param classFunction {Function} The class or arrow class of the throwable. Only for class inheritance.
   * @param message {string} The message in details
   */
  constructor({ classFunction, message }: Throwable_Contructor_Interface) {
    super({ classFunction: ClassNotFoundError, message: message });
  }
}
export { ClassNotFoundError };
