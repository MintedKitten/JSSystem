import { randBetween } from "big-integer";
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
  #Class_Name = this.constructor.name;
  #Class_Serial: bigint;
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

  set serial(serialBigInt: bigint) {
    this.#Class_Serial = serialBigInt;
  }

  public getClass(): JSClass {
    return this.#Class_Object;
  }

  public toString(): string {
    return `class ${this.getClass().getName()}`;
  }
}

export { JSObject };
