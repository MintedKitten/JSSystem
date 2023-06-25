import { JSObject, Random_Serial_BigInt } from "../../build/index.mjs";
class TestClass extends JSObject {
  constructor() {
    super({ serialBigInt: Random_Serial_BigInt() });
  }
  test() {
    console.log("test2");
  }
}
export {
  TestClass
};