import { JSObject } from "../../build";

class TestClass extends JSObject {
  constructor() {
    super();
  }

  public test() {
    console.log("test1");
  }
}

export { TestClass };
