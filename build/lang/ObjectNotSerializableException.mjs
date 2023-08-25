import { JSException } from "./JSException.mjs";
class ObjectSerializableFailedException extends JSException {
  /**
     * The constructor of class ObjectSerializableFailedException. When an object has the interface ISerializable but failed to execute when called.
     * @param classFunction {Function} The class or arrow class of the throwable. Only for class inheritance.
     * @param message {string} The message in details
     */
  constructor({ classFunction, message }, serialBigInt) {
    super(
      {
        classFunction: classFunction ?? ObjectSerializableFailedException,
        message
      },
      serialBigInt
    );
  }
}
export {
  ObjectSerializableFailedException
};