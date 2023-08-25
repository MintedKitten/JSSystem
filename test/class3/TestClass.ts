import {
  JSObject,
  Random_Serial_BigInt,
  INewEmptyObject,
  ICloneable,
  CloneNotSupportedException,
  Static_Implements,
} from "../../build";

class TestClass
  extends JSObject
  implements ICloneable, Static_Implements<typeof TestClass, INewEmptyObject>
{
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

  static newEmptyObject(): TestClass {
    const temp = new TestClass();
    temp.name = "";
    temp.email = "";
    return temp;
  }

  toJSON(): string {
    return "dummy " + this.name
  }
}

export { TestClass };
