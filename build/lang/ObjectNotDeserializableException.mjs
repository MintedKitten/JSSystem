import { JSException } from "./JSException.mjs";
class ObjectDeserializableFailedException extends JSException {
  /**
     * The constructor of class ObjectDeserializableFailedException. When an object has the interface IDeserializable but failed to execute when called.
     * @param classFunction {Function} The class or arrow class of the throwable. Only for class inheritance.
     * @param message {string} The message in details
     */
  constructor({ classFunction, message }, serialBigInt) {
    super(
      {
        classFunction: classFunction ?? ObjectDeserializableFailedException,
        message
      },
      serialBigInt
    );
  }
}
export {
  ObjectDeserializableFailedException
};