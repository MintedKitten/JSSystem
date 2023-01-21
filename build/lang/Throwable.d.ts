/// <reference types="node" />
import { JSObject } from "./JSObject";
declare class Throwable extends JSObject {
    #private;
    /**
     *
     * @param message
     */
    Throwable(message?: String | undefined): void;
    getMessage(): String | null;
    /**
     * Returns a short description of the Throwable.
     */
    toString(): String;
    /**
     * Prints the Throwable and the Throwable's stack trace.
     */
    printStackTrace(s?: NodeJS.WriteStream | undefined): void;
    private printStackTrace0;
    private fillInStackTrace;
}
export { Throwable };
