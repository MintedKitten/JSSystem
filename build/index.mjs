import { JSClass } from "./lang/JSClass.mjs";
import {
  JSSystemGetClasses,
  JSSystemGetAllClasses,
  Random_Serial_BigInt,
  JSSystemGetClass,
  JSSystemTryBecomeClass
} from "./lang/System.mjs";
import { JSObject } from "./lang/JSObject.mjs";
import { ClassNotFoundError } from "./lang/ClassNotFoundError.mjs";
import { IllegalArgumentException } from "./lang/IllegalArgumentException.mjs";
import { JSError } from "./lang/JSError.mjs";
import { JSException } from "./lang/JSException.mjs";
import { Throwable } from "./lang/Throwable.mjs";
import { JSObjectWithEmpty } from "./lang/JSObjectWithEmpty.mjs";
new JSObject();
export {
  ClassNotFoundError,
  IllegalArgumentException,
  JSClass,
  JSError,
  JSException,
  JSObject,
  JSObjectWithEmpty,
  JSSystemGetAllClasses,
  JSSystemGetClass,
  JSSystemGetClasses,
  JSSystemTryBecomeClass,
  Random_Serial_BigInt,
  Throwable
};