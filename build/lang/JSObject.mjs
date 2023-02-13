import { JSSystem, Random_Serial_BigInt } from "./System.mjs";
import { v4 as uuidv4 } from "uuid";
const __inner_serial_bigint = Random_Serial_BigInt();
class JSObject {
  /**
   * Get the name of the baseclass.
   */
  #Class_Name = this.constructor.name;
  /**
   * The Serial Bigint of the class;
   */
  #Class_Serial;
  /**
   * The registered class object of this class.
   */
  #Class_Object;
  /**
   * The hashcode bigint of each object. Should be different number for each object.
   * The current implementation uses the serial of the JSObject and an offset;
   */
  #Hash_BigInt = BigInt(`0x${uuidv4().replace(/-/g, "")}`);
  /**
   * Contrustor. Object is superclass, so there's no super class contrustor to be called.
   * Every subclass should create a unique serial bigint, to avoid the same class name collision.
   * Recommended to enter unique serial bigint. Or use @function{Random_Serial_BigInt} to randomly generated one.
   * @param serialBigInt {bigint} The serial bigint of the object.
   */
  constructor(serialBigInt = __inner_serial_bigint) {
    this.#Class_Serial = serialBigInt;
    this.#Class_Object = JSSystem.addClass(
      this.#Class_Name,
      this.#Class_Serial
    );
  }
  /**
   * Get the registered class object of this class.
   * @returns {JSClass} The registered class object of the baseclass.
   */
  getClass() {
    return this.#Class_Object;
  }
  /**
   * Return the string representation of this object. Default implementation return the name of the baseclass.
   * @returns {string} The name of the class.
   */
  toString() {
    return `class ${this.getClass().getName()}`;
  }
  /**
   * Return a hash as bigint. Each object should have a unique hash.
   * @returns {bigint} The hash bigint.
   */
  hashCode() {
    return BigInt(this.getClass().getSerialBigInt() + this.#Hash_BigInt);
  }
  /**
   * Compares two JSObjects for equality.
   * Returns a boolean that indicates whether this Object is equivalent
   * to the specified Object. This method is used when an Object is stored
   * in a hashtable.
   * @param ob {JSObject} The object to compare to.
   * @returns {boolean} Return true, if it is the same object. Otherwise false.
   */
  isEquals(ob) {
    return this === ob;
  }
}
export {
  JSObject
};