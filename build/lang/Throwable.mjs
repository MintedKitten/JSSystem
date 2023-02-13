import { JSObject } from "./JSObject.mjs";
class Throwable extends JSObject {
  #backtrace = "";
  #classFunctionCall = function() {
  };
  #detailMessage = null;
  /**
   * The constructs a new Throwable with the specified detail message.
   * The stack trace is automatically filled in.
   * The classFcuntion parameter is used in inheritance so the stack trace works properly.
   * @param classFunction {Function} The class or arrow class of the throwable. Only for class inheritance.
   * @param message {string} The message in details - Optional
   */
  constructor({ classFunction, message }) {
    super();
    this.#classFunctionCall = classFunction ?? Throwable;
    if (message !== void 0 && message !== "") {
      this.#detailMessage = message;
    }
    this.fillInStackTrace();
  }
  /**
   * The name of the throwable class.
   */
  get name() {
    return this.getClass().getName();
  }
  /**
   * The stack trace of the throwable.
   */
  get stack() {
    return this.toString() + this.#backtrace;
  }
  /**
   * The message details of the throwable.
   */
  get message() {
    return this.#detailMessage ?? "";
  }
  /**
   * Returns a short description of the Throwable.
   * @returns {string} The string representation of the throwable.
   */
  toString() {
    const s = this.getClass().getName();
    const message = this.message;
    return message !== "" ? `${s}: ${message}` : s;
  }
  /**
   * Prints the Throwable and the Throwable's stack trace.
   * @param s {NodeJS.WriteStream} A custom write stream - Optional
   */
  printStackTrace(s) {
    if (s === void 0) {
      console.log(this.toString());
      this.printStackTrace0(process.stdout);
    } else {
      s.write(`${this.toString()}`);
      this.printStackTrace0(s);
    }
  }
  /**
   * I don't actually know how to implement this. So nothing's here.
   * @param s {NodeJS.WriteStream} A custom write stream
   */
  printStackTrace0(s) {
  }
  /**
   * A thing to get stack trace
   */
  fillInStackTrace() {
    const temps = Error.stackTraceLimit;
    Error.stackTraceLimit = Number.POSITIVE_INFINITY;
    const object = { stack: "" };
    Error.captureStackTrace(object, this.#classFunctionCall);
    Error.stackTraceLimit = temps;
    this.#backtrace = object.stack.slice(5);
  }
}
export {
  Throwable
};