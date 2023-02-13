"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var JSClass_exports = {};
__export(JSClass_exports, {
  JSClass: () => JSClass
});
module.exports = __toCommonJS(JSClass_exports);
var import_System = require("./System");
let __inner_class_object;
const __inner_jsclass_serial_bigint = (0, import_System.Random_Serial_BigInt)();
function getInnerJSClass() {
  return __inner_class_object;
}
class JSClass {
  #Class_Name = this.constructor.name;
  #Class_Object = getInnerJSClass;
  #ClassName = "";
  #Unique_Serial_BigInt;
  constructor({ className, serial }) {
    this.#Unique_Serial_BigInt = serial;
    this.#ClassName = className;
  }
  getClass() {
    return this.#Class_Object();
  }
  getName() {
    return this.#ClassName;
  }
  getSerialBigInt() {
    return this.#Unique_Serial_BigInt;
  }
  isEquals(jsclass) {
    return this.getName() === jsclass.getName() && this.getSerialBigInt() === jsclass.getSerialBigInt();
  }
}
__inner_class_object = import_System.JSSystem.addClass(
  "JSClass",
  __inner_jsclass_serial_bigint
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  JSClass
});
