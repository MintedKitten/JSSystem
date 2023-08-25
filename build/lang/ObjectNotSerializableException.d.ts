import { JSException } from "./JSException";
import { Serial_BigInt } from "./JSObject";
import { Throwable_Contructor_Interface } from "./Throwable";
declare class ObjectSerializableFailedException extends JSException {
    /**
       * The constructor of class ObjectSerializableFailedException. When an object has the interface ISerializable but failed to execute when called.
       * @param classFunction {Function} The class or arrow class of the throwable. Only for class inheritance.
       * @param message {string} The message in details
       */
    constructor({ classFunction, message }: Throwable_Contructor_Interface, serialBigInt?: Serial_BigInt);
}
export { ObjectSerializableFailedException };
