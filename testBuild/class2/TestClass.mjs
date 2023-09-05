import {
  JSObject,
  Random_Serial_BigInt
} from "../../build/index.mjs";
class TestClass extends JSObject {
  name;
  constructor() {
    super({ serialBigInt: Random_Serial_BigInt() });
  }
  toJSON() {
    return { name: this.name };
  }
  static fromJSON(serialized) {
    const temp = new TestClass();
    temp.name = serialized.name;
    return temp;
  }
  test() {
    console.log("test2");
  }
}
export {
  TestClass
};