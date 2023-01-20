import { JSSystem, Random_Serial_BigInt } from "../System";
import { JSClass } from "./JSClass";

/**
 * Serial BigInt
 */
const __inner_serial_bigint = Random_Serial_BigInt();

/**
 * JSS Object Class. The superclass of every class
 */
class JSObject {
  /**
   * Get the name of the baseclass.
   */
  #Class_Name = this.constructor.name;
  /**
   * The Serial Bigint of the class;
   */
  #Class_Serial: bigint;
  /**
   * The registered class object of this class.
   */
  #Class_Object: JSClass;
  /**
   * Contrustor. Object is superclass, so there's no super class contrustor to be called.
   * Every subclass should create a unique serial bigint, to avoid the same class name collision.
   */
  constructor(serialBigInt: bigint = __inner_serial_bigint) {
    this.#Class_Serial = serialBigInt ?? __inner_serial_bigint;
    this.#Class_Object = JSSystem.addClass(
      this.#Class_Name,
      this.#Class_Serial
    );
  }

  /**
   * Get the registered class object of this class.
   * @returns {JSClass} The registered class object of the baseclass.
   */
  public getClass(): JSClass {
    return this.#Class_Object;
  }

  /**
   * Return the string representation of this object. Default implementation return the name of the baseclass.
   * @returns The name of the class.
   */
  public toString(): String {
    return `class ${this.getClass().getName()}`;
  }

  /**
   *
   * @returns
   */
  public hashCode(): bigint {
    return BigInt(1);
  }

  /**
   * Compares two Objects for equality.
   * Returns a boolean that indicates whether this Object is equivalent
   * to the specified Object. This method is used when an Object is stored
   * in a hashtable.
   * @param ob
   * @returns
   */
  public isEquals(ob: JSObject): boolean {
    return this === ob;
  }
}

export { JSObject };
