import { JSClass } from "./JSClass";
import big__integer from "big-integer"; // big-integer doesn't support destruct import
import { ClassNotFoundError } from "./ClassNotFoundError";

/**
 * JSS System Class. The class that keeps everything in check.
 * @class JSS.System
 */
class System {
  /**
   * Any new class that is created with JSObject will create a class object and store it inhere.
   */
  #JSClasses: JSClass[] = [];
  /**
   * Should not, and will not do anything.
   */
  constructor() {}
  /**
   * When an object of a class is created, that class will attempt to register a class object by passing a class name into this function.
   * If that class name has never been register, this will create a new class object, store it, and return it. If that class name has been register, the corresponding class object will be return.
   * @param className {string} The name of the class. Usually retrieve from the private object {#Class_Name = this.constructor.name} from the baseclass.
   * @returns The class object in Object {JSClass}
   */
  public addClass(className: string, serialBigint: bigint): JSClass {
    let jsclass: JSClass | undefined = undefined;
    for (let index = 0; index < this.#JSClasses.length; index++) {
      const tempclass = this.#JSClasses[index];
      if (
        tempclass.getName() === className &&
        tempclass.getSerialBigInt() === serialBigint
      ) {
        jsclass = this.#JSClasses[index];
      }
    }
    if (jsclass !== undefined) {
      // The class has already been registered, return the class object.
      return jsclass;
    } else {
      // The class has not been registered, register and return the class object.
      jsclass = new JSClass({ className: className, serial: serialBigint });
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
  public getClasses(className: string): JSClass[] {
    const _jsclasses: JSClass[] = [];
    this.#JSClasses.forEach((jsclass) => {
      if (className === jsclass.getName()) {
        _jsclasses.push(jsclass);
      }
    });
    if (_jsclasses.length > 0) {
      return _jsclasses;
    } else {
      throw new ClassNotFoundError({ message: "Class Not Found" });
    }
  }
  /**
   * Get every registered class objects.
   * @returns {JSClass[]} The array of every registered class objects.
   */
  public getAllClasses(): JSClass[] {
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
  public tryBecomeClass<T>({
    object,
    className,
  }: Try_Become_Class_Interface): T | undefined {
    try {
      const jsclasses = this.getClasses(className);
      let isCompatible = false;
      jsclasses.forEach(function (jsclass) {
        if (object.getClass() === jsclass) {
          isCompatible = true;
        }
      });
      if (isCompatible) {
        return object as T;
      } else {
        throw new Error("Not Convertable, Throw new Error to be catch");
      }
    } catch (e) {
      // Either error from not convertable, or object isn't a JSObject.
      return undefined;
    }
  }
}
interface Try_Become_Class_Interface {
  // rome-ignore lint/suspicious/noExplicitAny: Really anything can be tried.
  object: any;
  className: string;
}
/**
 * The interface for @function{Random_Serial_BigInt}
 * @param min Minimum range inclusive - Optional - Default: -1e100
 * @param max Maximum range inclusive - Optional - Default: 1e100
 */
interface Random_Serial_BigInt_Interface {
  /**
   * {bigint} Minimum range inclusive - Optional - Default: -1e100
   */
  min?: bigint;
  /**
   * {bigint} Maximum range inclusive - Optional - Default: 1e100
   */
  max?: bigint;
}
/**
 * Randomly generated bigint. Made for class serial bigint.
 * @function JSS.Random_Serial_BigInt
 * @param options {Random_Serial_BigInt_Interface} The option for @function{Random_Serial_BigInt}
 * @returns {bigint} A bigint
 */
function Random_Serial_BigInt(
  options?: Random_Serial_BigInt_Interface
): bigint {
  const min = options?.min || "-1e100";
  const max = options?.max || "1e100";
  return BigInt(
    big__integer.randBetween(min.toString(), max.toString()).toString()
  );
}
/**
 * For Internal Use
 */
const JSSystem = new System();
/**
 * Wrapping JSSystem.getClasses for public use.
 * @function JSS.JSSystemGetClasses
 * @throws {ClassNotFoundError} Class Not Found
 * @param className {string} The name of the registered class that you are looking for.
 * @returns {JSClass[]} The array of class object where the class name is the same as the lookup registered class name.
 */
function JSSystemGetClasses(className: string): JSClass[] {
  return JSSystem.getClasses(className);
}
/**
 * Wrapping JSSystemGetClass for public use.
 * Call JSSystemGetClasses and return the first index.
 * @see {@link JSSystemGetClasses}
 * @function JSS.JSSystemGetClass
 * @throws {ClassNotFoundError} Class Not Found
 * @param className {string} The name of the registered class that you are looking for.
 * @returns {JSClass} The class object where the class name is the same as the lookup registered class name.
 */
function JSSystemGetClass(className: string): JSClass {
  return JSSystemGetClasses(className)[0];
}
/**
 * Wrapping JSSystem.getAllClasses for public use.
 * @function JSS.JSSystemGetAllClasses
 * @returns {JSClass[]} The array of every registered class objects.
 */
function JSSystemGetAllClasses(): JSClass[] {
  return JSSystem.getAllClasses();
}
/**
 * Wrapping JSSystem.tryBecomeClass for public use.
 * Try to convert the object to a class.
 * Require the class type and class name to be the same.
 * @T {type} The type to be converted to.
 * @param .object {any} The object to be converted.
 * @param .className {string} The name of the registered class.
 * @returns {boolean | undefined} If object can be converted, will return the object after converted; otherwise return undefined.
 */
function JSSystemTryBecomeClass<T>({
  object,
  className,
}: Try_Become_Class_Interface): ReturnType<typeof JSSystem.tryBecomeClass<T>> {
  return JSSystem.tryBecomeClass<T>({ object: object, className: className });
}
export {
  JSSystem,
  JSSystemGetClasses,
  JSSystemGetClass,
  JSSystemGetAllClasses,
  JSSystemTryBecomeClass,
  Random_Serial_BigInt,
};
export type { Random_Serial_BigInt_Interface };
