"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var System_exports = {};
__export(System_exports, {
  JSSystem: () => JSSystem,
  JSSystemGetAllClasses: () => JSSystemGetAllClasses,
  JSSystemGetClass: () => JSSystemGetClass,
  JSSystemGetClasses: () => JSSystemGetClasses,
  JSSystemTryBecomeClass: () => JSSystemTryBecomeClass,
  Random_Serial_BigInt: () => Random_Serial_BigInt
});
module.exports = __toCommonJS(System_exports);
var import_JSClass = require("./JSClass");
var import_big_integer = __toESM(require("big-integer"));
var import_ClassNotFoundError = require("./ClassNotFoundError");
class System {
  /**
   * Any new class that is created with JSObject will create a class object and store it inhere.
   */
  #JSClasses = [];
  /**
   * Should not, and will not do anything.
   */
  constructor() {
  }
  /**
   * When an object of a class is created, that class will attempt to register a class object by passing a class name into this function.
   * If that class name has never been register, this will create a new class object, store it, and return it. If that class name has been register, the corresponding class object will be return.
   * @param className {string} The name of the class. Usually retrieve from the private object {#Class_Name = this.constructor.name} from the baseclass.
   * @returns The class object in Object {JSClass}
   */
  addClass(className, serialBigint) {
    let jsclass = void 0;
    for (let index = 0; index < this.#JSClasses.length; index++) {
      const tempclass = this.#JSClasses[index];
      if (tempclass.getName() === className && tempclass.getSerialBigInt() === serialBigint) {
        jsclass = this.#JSClasses[index];
      }
    }
    if (jsclass !== void 0) {
      return jsclass;
    } else {
      jsclass = new import_JSClass.JSClass({ className, serial: serialBigint });
      this.#JSClasses.push(jsclass);
      return jsclass;
    }
  }
  /**
   * Attempt to find registered class with the specify name. Because javascript allow duplicate class name, namy registered class object can be return. If the class has not been registered, an error will be thrown.
   * @throws {ClassNotFoundError} Class Not Found
   * @param className {string} The name of the registered class that you are looking for.
   * @returns {JSClass[]} The array of class objects where the class name is the same as the lookup registered class name.
   */
  getClasses(className) {
    const _jsclasses = [];
    this.#JSClasses.forEach((jsclass) => {
      if (className === jsclass.getName()) {
        _jsclasses.push(jsclass);
      }
    });
    if (_jsclasses.length > 0) {
      return _jsclasses;
    } else {
      throw new import_ClassNotFoundError.ClassNotFoundError({ message: "Class Not Found" });
    }
  }
  /**
   * Get every registered class objects.
   * @returns {JSClass[]} The array of every registered class objects.
   */
  getAllClasses() {
    return this.#JSClasses;
  }
  /**
   * Try to convert the object to a class.
   * Require the class type and class name to be the same.
   * @T {type} The type to be converted to.
   * @param .object {any} The object to be converted.
   * @param .className {string} The name of the registered class.
   * @returns {boolean | undefined} If object can be converted, will return the object after converted; otherwise return undefined.
   */
  tryBecomeClass({
    object,
    className
  }) {
    try {
      const jsclasses = this.getClasses(className);
      let isCompatible = false;
      jsclasses.forEach(function(jsclass) {
        if (object.getClass() === jsclass) {
          isCompatible = true;
        }
      });
      if (isCompatible) {
        return object;
      } else {
        throw new Error("Not Convertable, Throw new Error to be catch");
      }
    } catch (e) {
      return void 0;
    }
  }
}
function Random_Serial_BigInt(options) {
  const min = options?.min || "-1e100";
  const max = options?.max || "1e100";
  return BigInt(
    import_big_integer.default.randBetween(min.toString(), max.toString()).toString()
  );
}
const JSSystem = new System();
function JSSystemGetClasses(className) {
  return JSSystem.getClasses(className);
}
function JSSystemGetClass(className) {
  return JSSystemGetClasses(className)[0];
}
function JSSystemGetAllClasses() {
  return JSSystem.getAllClasses();
}
function JSSystemTryBecomeClass({
  object,
  className
}) {
  return JSSystem.tryBecomeClass({ object, className });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  JSSystem,
  JSSystemGetAllClasses,
  JSSystemGetClass,
  JSSystemGetClasses,
  JSSystemTryBecomeClass,
  Random_Serial_BigInt
});
