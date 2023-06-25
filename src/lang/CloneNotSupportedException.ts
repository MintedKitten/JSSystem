import { JSException } from "./JSException";
import { Serial_BigInt } from "./JSObject";
import { Throwable_Contructor_Interface } from "./Throwable";
/**
 * The JS Exception for when an object does not support ICloneable
 * @class JSS.lang.CloneNotSupportedException
 * @see {@link ICloneable}
 */
class CloneNotSupportedException extends JSException {
  /**
   * The constructor of class CloneNotSupportedException. When an object does not support the interface ICloneable.
   * @param classFunction {Function} The class or arrow class of the throwable. Only for class inheritance.
   * @param message {string} The message in details
   */
  constructor(
    { classFunction, message }: Throwable_Contructor_Interface,
    serialBigInt?: Serial_BigInt
  ) {
    super(
      {
        classFunction: classFunction ?? CloneNotSupportedException,
        message: message,
      },
      serialBigInt
    );
  }
}

export { CloneNotSupportedException };
