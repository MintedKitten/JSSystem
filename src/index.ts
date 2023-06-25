/**
 * JSClass must be loaded before JSSystem and JSObject
 */
import { JSClass } from "./lang/JSClass";
import {
  JSSystemGetClasses,
  JSSystemGetAllClasses,
  Random_Serial_BigInt,
  JSSystemGetClass,
  JSSystemTryBecomeClass,
  Random_Serial_BigInt_Interface,
} from "./lang/System";
import { JSObject } from "./lang/JSObject";

// Make sure everything is exported
import { ClassNotFoundError } from "./lang/ClassNotFoundError";
import { IllegalArgumentException } from "./lang/IllegalArgumentException";
import { JSError } from "./lang/JSError";
import { JSException } from "./lang/JSException";
import { Throwable } from "./lang/Throwable";
import { INewEmptyObject } from "./lang/INewEmptyObject";
import { UnsupportedOperationException } from "./lang/UnsupportedOperationException";
import { ICloneable } from "./lang/ICloneable";
import { CloneNotSupportedException } from "./lang/CloneNotSupportedException";

/**
 * Registering Object in System
 */
new JSObject();
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
  ClassNotFoundError,
  IllegalArgumentException,
  UnsupportedOperationException,
  CloneNotSupportedException,
};
export type { Random_Serial_BigInt_Interface, INewEmptyObject, ICloneable };
