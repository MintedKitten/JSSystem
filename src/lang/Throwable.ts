import { JSObject } from "./JSObject";

class Throwable extends JSObject {
  #backtrace: Error = new Error();
  #detailMessage: String | null = null;

  public Throwable(message: String | undefined = undefined) {
    this.fillInStackTrace();
    if (message !== undefined) {
      this.#detailMessage = message;
    }
  }

  public getMessage(): String | null {
    return this.#detailMessage;
  }

  /**
   * Returns a short description of the Throwable.
   */
  public toString(): String {
    const s = this.getClass().getName();
    const message = this.getMessage();
    return message !== null ? `${s}: ${message}` : s;
  }

  /**
   * Prints the Throwable and the Throwable's stack trace.
   */
  public printStackTrace(s: NodeJS.WriteStream | undefined = undefined): void {
    if (s === undefined) {
      console.log(this.toString());
      this.printStackTrace0(process.stdout);
      return;
    }
    s.write(`${this.toString()}`);
    this.printStackTrace0(s);
  }

  private printStackTrace0(s: NodeJS.WriteStream): void {}

  private fillInStackTrace(): void {
    this.#backtrace = new Error(this.#backtrace.stack);
  }
}

export { Throwable };
