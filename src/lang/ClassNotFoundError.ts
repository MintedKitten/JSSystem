import { JSError } from "./JSError";
/**
 * The JS Error for when looking up a class in {JSSystemGetCallClasses}
 * @class JSS.lang.JSClass
 * @see JSSystemGetClasses
 */
class ClassNotFoundError extends JSError {
  /**
   * The constructor of class ClassNotFoundError. When class lookup in JSSystem found nothing
   * @param message {string} The message in details
   */
  constructor(message: string | undefined = undefined) {
    super(message);
  }
}
export { ClassNotFoundError };
