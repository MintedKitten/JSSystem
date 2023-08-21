var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
import {
  JSObject,
  Random_Serial_BigInt,
  Static_Implements
} from "../../build/index.mjs";
let TestClass = class extends JSObject {
  name;
  email;
  constructor() {
    super({ serialBigInt: Random_Serial_BigInt() });
  }
  clone() {
    const temp = new TestClass();
    temp.name = this.name;
    temp.email = this.email;
    return temp;
  }
  test() {
    console.log("test3");
  }
};
TestClass = __decorateClass([
  Static_Implements()
], TestClass);
export {
  TestClass
};