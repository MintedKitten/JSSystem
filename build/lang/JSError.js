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
var JSError_exports = {};
__export(JSError_exports, {
  JSError: () => JSError
});
module.exports = __toCommonJS(JSError_exports);
var import_Throwable = require("./Throwable");
class JSError extends import_Throwable.Throwable {
  /**
   * The constructor of class JSError. A generic error
   * @param classFunction {Function} The class or arrow class of the throwable. Only for class inheritance.
   * @param message {string} The message in details
   */
  constructor({ classFunction, message }, serialBigInt) {
    super(
      { classFunction: classFunction ?? JSError, message },
      serialBigInt
    );
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  JSError
});
