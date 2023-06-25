import { JSObject } from "./JSObject.mjs";
class JSObjectWithEmpty extends JSObject {
  /**
   * JSObject with newEmptyObject
   * @param serialBigInt
   * @see {@link JSObject}
   */
  constructor(serialBigInt) {
    super(serialBigInt);
  }
}
export {
  JSObjectWithEmpty
};