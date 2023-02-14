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
var IllegalArgumentException_exports = {};
__export(IllegalArgumentException_exports, {
  IllegalArgumentException: () => IllegalArgumentException
});
module.exports = __toCommonJS(IllegalArgumentException_exports);
var import_JSException = require("./JSException");
class IllegalArgumentException extends import_JSException.JSException {
  /**
   * The constructor of class IllegalArgumentException. When argument was passed incorrectly.
   * @param classFunction {Function} The class or arrow class of the throwable. Only for class inheritance.
   * @param message {string} The message in details
   */
  constructor({ classFunction, message }, serialBigInt) {
    super(
      {
        classFunction: classFunction ?? IllegalArgumentException,
        message
      },
      serialBigInt
    );
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  IllegalArgumentException
});
