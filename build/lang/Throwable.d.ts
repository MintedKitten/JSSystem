/// <reference types="node" />
import { JSObject, Serial_BigInt } from "./JSObject";
/**
 * JSS Throwable class. The base of every throwable class in JSS
 * @class JSS.lang.Throwable
 */
interface Throwable_Contructor_Interface {
    /**
     * The class or arrow class of the throwable.
     */
    classFunction?: Function;
    /**
     * The message in details - Optional
     */
    message?: string;
}
declare class Throwable extends JSObject {
    #private;
    /**
     * The constructs a new Throwable with the specified detail message.
     * The stack trace is automatically filled in.
     * The classFcuntion parameter is used in inheritance so the stack trace works properly.
     * @param classFunction {Function} The class or arrow class of the throwable. Only for class inheritance.
     * @param message {string} The message in details - Optional
     */
    constructor({ classFunction, message }: Throwable_Contructor_Interface, serialBigInt?: Serial_BigInt);
    /**
     * The name of the throwable class.
     */
    get name(): string;
    /**
     * The stack trace of the throwable.
     */
    get stack(): string;
    /**
     * The message details of the throwable.
     */
    get message(): string;
    /**
     * Returns a short description of the Throwable.
     * @returns {string} The string representation of the throwable.
     */
    toString(): string;
    /**
     * Prints the Throwable and the Throwable's stack trace.
     * @param s {NodeJS.WriteStream} A custom write stream - Optional
     */
    printStackTrace(s?: NodeJS.WriteStream): void;
    /**
     * I don't actually know how to implement this. So nothing's here.
     * @param s {NodeJS.WriteStream} A custom write stream
     */
    private printStackTrace0;
    /**
     * A thing to get stack trace
     */
    private fillInStackTrace;
}
export { Throwable };
export type { Throwable_Contructor_Interface };
