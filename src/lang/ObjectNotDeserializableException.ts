import { JSException } from "./JSException";
import { Serial_BigInt } from "./JSObject";
import { Throwable_Contructor_Interface } from "./Throwable";

class ObjectDeserializableFailedException extends JSException {
/**
   * The constructor of class ObjectDeserializableFailedException. When an object has the interface IDeserializable but failed to execute when called.
   * @param classFunction {Function} The class or arrow class of the throwable. Only for class inheritance.
   * @param message {string} The message in details
   */
constructor(
    { classFunction, message }: Throwable_Contructor_Interface,
    serialBigInt?: Serial_BigInt
  ) {
    super(
      {
        classFunction: classFunction ?? ObjectDeserializableFailedException,
        message: message,
      },
      serialBigInt
    );
  }
}

export { ObjectDeserializableFailedException };