import { JSObject, Serial_BigInt } from "./JSObject";

type Contructor<T> = { new (): T };

abstract class JSObjectWithEmpty extends JSObject {
  /**
   * JSObject with newEmptyObject
   * @param serialBigInt
   * @see {@link JSObject}
   */
  constructor(serialBigInt?: Serial_BigInt) {
    super(serialBigInt);
  }

  /**
   * Create a new 'Empty' object of this class.
   */
  abstract newEmptyObject<T>(this: Contructor<T>): T;
}

export { JSObjectWithEmpty };
