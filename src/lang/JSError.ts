import { Throwable } from "./Throwable";
class JSError extends Throwable {
  /**
   * The constructor of class JSError. A generic error
   * @param message {string} The message in details
   */
  constructor(message: string | undefined = undefined) {
    super(message);
  }
}
