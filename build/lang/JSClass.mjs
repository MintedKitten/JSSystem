import { JSSystem, Random_Serial_BigInt } from "./System.mjs";
let __inner_class_object;
const __inner_jsclass_serial_bigint = Random_Serial_BigInt();
function getInnerJSClass() {
  return __inner_class_object;
}
class JSClass {
  #Class_Name = this.constructor.name;
  #Class_Object = getInnerJSClass;
  #ClassName;
  #Unique_Serial_BigInt;
  constructor({ className, serial }) {
    this.#Unique_Serial_BigInt = serial;
    this.#ClassName = className;
  }
  getClass() {
    return this.#Class_Object();
  }
  getName() {
    return this.#ClassName;
  }
  getSerialBigInt() {
    return this.#Unique_Serial_BigInt;
  }
  isEquals(jsclass) {
    return this.getName() === jsclass.getName() && this.getSerialBigInt() === jsclass.getSerialBigInt();
  }
}
__inner_class_object = JSSystem.addClass(
  "JSClass",
  __inner_jsclass_serial_bigint
);
export {
  JSClass
};