import { JSObject } from "../build";

class TestClass extends JSObject {
  constructor() {
    super();
  }

  public test() {
    console.log("test");
  }
}

export { TestClass };
