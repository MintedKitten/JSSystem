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
var src_exports = {};
__export(src_exports, {
  ClassNotFoundError: () => import_ClassNotFoundError.ClassNotFoundError,
  IllegalArgumentException: () => import_IllegalArgumentException.IllegalArgumentException,
  JSClass: () => import_JSClass.JSClass,
  JSError: () => import_JSError.JSError,
  JSException: () => import_JSException.JSException,
  JSObject: () => import_JSObject.JSObject,
  JSSystemGetAllClasses: () => import_System.JSSystemGetAllClasses,
  JSSystemGetClass: () => import_System.JSSystemGetClass,
  JSSystemGetClasses: () => import_System.JSSystemGetClasses,
  JSSystemTryBecomeClass: () => import_System.JSSystemTryBecomeClass,
  Random_Serial_BigInt: () => import_System.Random_Serial_BigInt,
  Throwable: () => import_Throwable.Throwable
});
module.exports = __toCommonJS(src_exports);
var import_JSClass = require("./lang/JSClass");
var import_System = require("./lang/System");
var import_JSObject = require("./lang/JSObject");
var import_ClassNotFoundError = require("./lang/ClassNotFoundError");
var import_IllegalArgumentException = require("./lang/IllegalArgumentException");
var import_JSError = require("./lang/JSError");
var import_JSException = require("./lang/JSException");
var import_Throwable = require("./lang/Throwable");
new import_JSObject.JSObject();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ClassNotFoundError,
  IllegalArgumentException,
  JSClass,
  JSError,
  JSException,
  JSObject,
  JSSystemGetAllClasses,
  JSSystemGetClass,
  JSSystemGetClasses,
  JSSystemTryBecomeClass,
  Random_Serial_BigInt,
  Throwable
});
