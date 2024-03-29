import {
  JSObject,
  Random_Serial_BigInt
} from "../../build/index.mjs";
class TestClass extends JSObject {
  name;
  email;
  constructor() {
    super({ serialBigInt: Random_Serial_BigInt() });
  }
  clone() {
    const temp = new TestClass();
    temp.name = this.name;
    temp.email = this.email;
    return temp;
  }
  static newEmptyObject() {
    const temp = new TestClass();
    temp.name = "";
    temp.email = "";
    return temp;
  }
  toJSON() {
    return "dummy " + this.name;
  }
}
export {
  TestClass
};