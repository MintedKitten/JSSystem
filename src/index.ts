import { JSClass } from "./lang/JSClass";
import {
  JSSystemGetClasses,
  JSSystemGetAllClasses,
  Random_Serial_BigInt,
  JSSystemGetClass,
  JSSystemTryBecomeClass,
  Random_Serial_BigInt_Interface,
} from "./System";
import { JSObject } from "./lang/JSObject";
import { Throwable } from "./lang/Throwable";
import { JSError } from "./lang/JSError";
import { JSException } from "./lang/JSException";

/**
 * JSClass must be loaded before JSSystem and JSObject
 */
export {
  JSObject,
  JSClass,
  JSSystemGetClasses,
  JSSystemGetAllClasses,
  JSSystemTryBecomeClass,
  Random_Serial_BigInt,
  Throwable,
  JSError,
  JSException,
  JSSystemGetClass,
};
export type { Random_Serial_BigInt_Interface };
