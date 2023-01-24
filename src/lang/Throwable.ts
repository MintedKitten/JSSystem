import { JSObject } from "./JSObject";
/**
 * JSS Throwable class. The base of every throwable class in JSS
 * @class JSS.lang.Throwable
 */
class Throwable extends JSObject {
  #backtrace: Error = new Error();
  #detailMessage: string | null = null;
  /**
   * The constructor of class Throwable
   * @param message {string} The message in details
   */
  constructor(message: string | undefined = undefined) {
    super();
    this.fillInStackTrace();
    if (message !== undefined) {
      this.#detailMessage = message;
    }
  }

  get name(): string {
    return this.getClass().getName();
  }
  stack?: string;

  get message(): string | null {
    return this.#detailMessage;
  }

  /**
   * Returns a short description of the Throwable.
   */
  public toString(): string {
    const s = this.getClass().getName();
    const message = this.message;
    return message !== null ? `${s}: ${message}` : s;
  }

  /**
   * Prints the Throwable and the Throwable's stack trace.
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

  private printStackTrace0(s: NodeJS.WriteStream): void {}

  private fillInStackTrace(): void {
    Error.captureStackTrace(this);
  }
}

export { Throwable };
