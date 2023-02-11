import { JSSystem, Random_Serial_BigInt } from "./System";

let __inner_class_object: JSClass;

/**
 * Serial BigInt
 */
const __inner_jsclass_serial_bigint = Random_Serial_BigInt();

/**
 * Inner Private function
 * @returns class object
 */
function getInnerJSClass() {
  return __inner_class_object;
}
/**
 * The class of the class object. Use for class comparison.
 * @class JSS.lang.JSClass
 */
class JSClass {
  #Class_Name = this.constructor.name;
  #Class_Object = getInnerJSClass;
  #ClassName: string = "";
  #Unique_Serial_BigInt: bigint;

  constructor({ className, serial }: { className: string; serial: bigint }) {
    this.#Unique_Serial_BigInt = serial;
    this.#ClassName = className;
  }

  public getClass(): JSClass {
    return this.#Class_Object();
  }

  public getName(): string {
    return this.#ClassName;
  }

  public getSerialBigInt() {
    return this.#Unique_Serial_BigInt;
  }

  public isEquals(jsclass: JSClass) {
    return (
      this.getName() === jsclass.getName() &&
      this.getSerialBigInt() === jsclass.getSerialBigInt()
    );
  }
}

__inner_class_object = JSSystem.addClass(
  "JSClass",
  __inner_jsclass_serial_bigint
);
export { JSClass };
