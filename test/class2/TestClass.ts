import { JSObject, Random_Serial_BigInt } from "../../build";

class TestClass extends JSObject {
  constructor() {
    super({ serialBigInt: Random_Serial_BigInt() });
  }

  public test() {
    console.log("test2");
  }
}

export { TestClass };
