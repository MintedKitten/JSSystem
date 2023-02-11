import { JSObject } from "./JSObject";
/**
 * JSS Throwable class. The base of every throwable class in JSS
 * @class JSS.lang.Throwable
 */
class Throwable extends JSObject {
  #backtrace: Error = new Error();
  #detailMessage: string | null = null;
  /**
   * The constructs a new Throwable with the specified detail message.
   * The stack trace is automatically filled in.
   * @param message {string} The message in details
   */
  constructor(message: string | undefined = undefined) {
    super();
    this.fillInStackTrace();
    if (message !== undefined && message !== "") {
      this.#detailMessage = message;
    }
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
  stack?: string;

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
    return message !== null ? `${s}: ${message}` : s;
  }

  /**
   * Prints the Throwable and the Throwable's stack trace.
   * @param s {NodeJS.WriteStream} A custom write stream - Optional
   */
  public printStackTrace(s: NodeJS.WriteStream | undefined = undefined): void {
    if (s === undefined) {
      console.log(this.toString());
      this.printStackTrace0(process.stdout);
    } else {
      s.write(`${this.toString()}`);
      this.printStackTrace0(s);
    }
  }

  /**
   * I don't actually know how to implement this. So nothing here.
   * @param s {NodeJS.WriteStream} A custom write stream
   */
  private printStackTrace0(s: NodeJS.WriteStream): void {}

  /**
   * A thing
   */
  private fillInStackTrace(): void {
    const temps = Error.stackTraceLimit;
    Error.stackTraceLimit = Number.POSITIVE_INFINITY;
    Error.captureStackTrace(this);
    Error.stackTraceLimit = temps;
  }
}

export { Throwable };
