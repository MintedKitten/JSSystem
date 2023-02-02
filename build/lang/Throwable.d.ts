/// <reference types="node" />
import { JSObject } from "./JSObject";
/**
 * JSS Throwable class. The base of every throwable class in JSS
 * @class JSS.lang.Throwable
 */
declare class Throwable extends JSObject {
    #private;
    /**
     * The constructor of class Throwable
     * @param message {string} The message in details
     */
    constructor(message?: string | undefined);
    get name(): string;
    stack?: string;
    get message(): string;
    /**
     * Returns a short description of the Throwable.
     */
    toString(): string;
    /**
     * Prints the Throwable and the Throwable's stack trace.
     */
    printStackTrace(s?: NodeJS.WriteStream | undefined): void;
    private printStackTrace0;
    private fillInStackTrace;
}
export { Throwable };
