import { Serial_BigInt } from "./JSObject";
import { Throwable, Throwable_Contructor_Interface } from "./Throwable";
/**
 * JSS Exception class. The base of every Exception.
 * Exception are throwable that should be caught and resolved.
 * @class JSS.lang.JSException
 */
declare class JSException extends Throwable {
    /**
     * The constructor of class JSException. A generic exception
     * @param classFunction {Function} The class or arrow class of the throwable. Only for class inheritance.
     * @param message {string} The message in details.
     */
    constructor({ classFunction, message }: Throwable_Contructor_Interface, serialBigInt?: Serial_BigInt);
}
export { JSException };
