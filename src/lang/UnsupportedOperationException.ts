import { JSException } from "./JSException";
import { Serial_BigInt } from "./JSObject";
import { Throwable_Contructor_Interface } from "./Throwable";
/**
 * The JS Exception for when an operation is not supported.
 * @class JSS.lang.UnsupportedOperationException
 * @see JSSystemGetClasses
 */
class UnsupportedOperationException extends JSException {
  /**
   * The constructor of class UnsupportedOperationException. When the method in class is not supported.
   * @param classFunction {Function} The class or arrow class of the throwable. Only for class inheritance.
   * @param message {string} The message in details
   */
  constructor(
    { classFunction, message }: Throwable_Contructor_Interface,
    serialBigInt?: Serial_BigInt
  ) {
    super(
      {
        classFunction: classFunction ?? UnsupportedOperationException,
        message: message,
      },
      serialBigInt
    );
  }
}

export { UnsupportedOperationException };
