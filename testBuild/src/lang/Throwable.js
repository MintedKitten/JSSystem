import { JSObject } from "./JSObject";
/**
 * JSS Throwable class. The base of every throwable class in JSS
 * @class JSS.lang.Throwable
 */
class Throwable extends JSObject {
    #backtrace = new Error();
    #detailMessage = null;
    /**
     * The constructs a new Throwable with the specified detail message.
     * The stack trace is automatically filled in.
     * @param message {string} The message in details
     */
    constructor(message = undefined) {
        super();
        this.fillInStackTrace();
        if (message !== undefined && message !== "") {
            this.#detailMessage = message;
        }
    }
    get name() {
        return this.getClass().getName();
    }
    stack;
    get message() {
        return this.#detailMessage ?? "";
    }
    /**
     * Returns a short description of the Throwable.
     */
    toString() {
        const s = this.getClass().getName();
        const message = this.message;
        return message !== null ? `${s}: ${message}` : s;
    }
    /**
     * Prints the Throwable and the Throwable's stack trace.
     */
    printStackTrace(s = undefined) {
        if (s === undefined) {
            console.log(this.toString());
            this.printStackTrace0(process.stdout);
        }
        else {
            s.write(`${this.toString()}`);
            this.printStackTrace0(s);
        }
    }
    printStackTrace0(s) { }
    fillInStackTrace() {
        const temps = Error.stackTraceLimit;
        Error.stackTraceLimit = Number.POSITIVE_INFINITY;
        Error.captureStackTrace(this);
        Error.stackTraceLimit = temps;
    }
}
export { Throwable };
