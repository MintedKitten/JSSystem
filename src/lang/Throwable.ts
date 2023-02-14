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

class Throwable extends JSObject {
  #backtrace: string = "";
  #classFunctionCall: Function = function () {};
  #detailMessage: string | null = null;
  /**
   * The constructs a new Throwable with the specified detail message.
   * The stack trace is automatically filled in.
   * The classFcuntion parameter is used in inheritance so the stack trace works properly.
   * @param classFunction {Function} The class or arrow class of the throwable. Only for class inheritance.
   * @param message {string} The message in details - Optional
   */
  constructor(
    { classFunction, message }: Throwable_Contructor_Interface,
    serialBigInt?: Serial_BigInt
  ) {
    super(serialBigInt);
    this.#classFunctionCall = classFunction ?? Throwable;
    if (message !== undefined && message !== "") {
      this.#detailMessage = message;
    }
    this.fillInStackTrace();
  }

  /**
   * The name of the throwable class.
   */
  get name(): string {
    return this.getClass().getName();
  }

  /**
   * The stack trace of the throwable.
   */
  get stack(): string {
    return this.toString() + this.#backtrace;
  }

  /**
   * The message details of the throwable.
   */
  get message(): string {
    return this.#detailMessage ?? "";
  }

  /**
   * Returns a short description of the Throwable.
   * @returns {string} The string representation of the throwable.
   */
  public toString(): string {
    const s = this.getClass().getName();
    const message = this.message;
    return message !== "" ? `${s}: ${message}` : s;
  }

  /**
   * Prints the Throwable and the Throwable's stack trace.
   * @param s {NodeJS.WriteStream} A custom write stream - Optional
   */
  public printStackTrace(s?: NodeJS.WriteStream): void {
    if (s === undefined) {
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
  private printStackTrace0(s: NodeJS.WriteStream): void {}

  /**
   * A thing to get stack trace
   */
  private fillInStackTrace(): void {
    const temps = Error.stackTraceLimit;
    Error.stackTraceLimit = Number.POSITIVE_INFINITY;
    const object = { stack: "" };
    Error.captureStackTrace(object, this.#classFunctionCall);
    Error.stackTraceLimit = temps;
    this.#backtrace = object.stack.slice(5);
  }
}

export { Throwable };
export type { Throwable_Contructor_Interface };
