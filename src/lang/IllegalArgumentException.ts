import { JSException } from "./JSException";
import { Serial_BigInt } from "./JSObject";
import { Throwable_Contructor_Interface } from "./Throwable";
/**
 * The JS Exception for when an argument was passed incorrectly
 * @class JSS.lang.JSClass
 * @see JSSystemGetClasses
 */
class IllegalArgumentException extends JSException {
  /**
   * The constructor of class IllegalArgumentException. When argument was passed incorrectly.
   * @param classFunction {Function} The class or arrow class of the throwable. Only for class inheritance.
   * @param message {string} The message in details
   */
  constructor(
    { classFunction, message }: Throwable_Contructor_Interface,
    serialBigInt?: Serial_BigInt
  ) {
    super(
      { classFunction: IllegalArgumentException, message: message },
      serialBigInt
    );
  }
}
export { IllegalArgumentException };
