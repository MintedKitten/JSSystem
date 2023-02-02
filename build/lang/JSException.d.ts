import { Throwable } from "./Throwable";
/**
 * JSS Exception class. The base of every Exception.
 * Exception are throwable that should be caught and resolved.
 * @class JSS.lang.JSException
 */
declare class JSException extends Throwable {
    /**
     * The constructor of class JSException. A generic exception
     * @param message {string} The message in details
     */
    constructor(message?: string | undefined);
}
export { JSException };
