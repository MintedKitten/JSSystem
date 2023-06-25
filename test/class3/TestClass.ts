import {
  JSObject,
  Random_Serial_BigInt,
  INewEmptyObject,
  ICloneable,
  CloneNotSupportedException,
} from "../../build";

class TestClass extends JSObject implements INewEmptyObject, ICloneable {
  name: string;
  email: string;

  constructor() {
    super({ serialBigInt: Random_Serial_BigInt() });
  }
  clone(): TestClass {
    const temp = new TestClass();
    temp.name = this.name;
    temp.email = this.email;
    return temp;
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
