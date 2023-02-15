import { JSObject } from "../build/index.mjs";
class TestClass extends JSObject {
  constructor() {
    super();
  }
  test() {
    console.log("test");
  }
}
export {
  TestClass
};