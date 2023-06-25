import { JSObject, Random_Serial_BigInt } from "../../build/index.mjs";
class TestClass extends JSObject {
  name;
  email;
  constructor() {
    super({ serialBigInt: Random_Serial_BigInt() });
  }
  newEmptyObject() {
    const temp = new TestClass();
    temp.name = "";
    temp.email = "";
    return temp;
  }
  test() {
    console.log("test3");
  }
}
export {
  TestClass
};