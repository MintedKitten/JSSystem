import { JSObject, Random_Serial_BigInt, IWithEmptyObject } from "../../build";

class TestClass extends JSObject implements IWithEmptyObject {
  name: string;
  email: string;

  constructor() {
    super({ serialBigInt: Random_Serial_BigInt() });
  }
  newEmptyObject(): TestClass {
    const temp = new TestClass();
    temp.name = "";
    temp.email = "";
    return temp;
  }

  public test() {
    console.log("test3");
  }
}

export { TestClass };
