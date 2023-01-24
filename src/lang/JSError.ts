import { Throwable } from "./Throwable";
/**
 * JSS Error class. The base of every error.
 * Error are throwable that are usually not resolvable.
 * @class JSS.lang.JSError
 */
class JSError extends Throwable {
  /**
   * The constructor of class JSError. A generic error
   * @param message {string} The message in details
   */
  constructor(message: string | undefined = undefined) {
    super(message);
  }
}
export { JSError}