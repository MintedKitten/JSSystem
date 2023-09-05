import {
  IDeserializable,
  ISerializable,
  JSObject,
  Random_Serial_BigInt,
  Static_Implements,
} from "../../build";

type ser = {
  name: string;
};

class TestClass
  extends JSObject
  implements
    ISerializable,
    Static_Implements<typeof TestClass, IDeserializable>
{
  name: string;
  constructor() {
    super({ serialBigInt: Random_Serial_BigInt() });
  }

  toJSON(): ser {
    return { name: this.name };
  }

  static fromJSON(serialized: ser): TestClass {
    const temp = new TestClass()
    temp.name = serialized.name
    return temp
  }

  public test() {
    console.log("test2");
  }
}

export { TestClass };
