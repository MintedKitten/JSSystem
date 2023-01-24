import { JSClass } from "./lang/JSClass";
import { randBetween } from "big-integer";
import { ClassNotFoundError } from "./lang/ClassNotFoundError";

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
      // The class has already been registered, return the class object
      return jsclass;
    } else {
      // The class has not been registered, register and return the class object
      jsclass = new JSClass({ className: className, serial: serialBigint });
      this.#JSClasses.push(jsclass);
      return jsclass;
    }
  }
  /**
   * Attempt to find registered class with the specify name. Because javascript allow duplicate class name, namy registered class object can be return. If the class has not been registered, an error will be thrown.
   * @throws {ClassNotFoundError} Class Not Found
   * @param className {string} The name of the registered class that you are looking for
   * @returns {JSClass[]} The array of class objects where the class name is the same as the lookup registered class name
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
      throw new ClassNotFoundError("Class Not Found");
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
   * If object can become a class, return true and the object as that class.
   * If not, return false.
   * @param object {object} The object being converted
   * @param className {string} The name of the class
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
          return true;
        }
      });
      if (isCompatible) {
        return object as T;
      } else {
        throw new Error("Not Convertable");
      }
    } catch (e) {
      return undefined;
    }
  }
}
interface Try_Become_Class_Interface {
  object: any;
  className: string;
}
/**
 * The interface for @function{Random_Serial_BigInt}
 * @param min Minimum range inclusive - Optional - Default: -1e100
 * @parem man Maximum range inclusive - Optional - Default: 1e100
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
 * @param options {Random_Serial_BigInt_Interface} The option for @function{Random_Serial_BigInt}
 * @returns {bigint} A bigint
 */
function Random_Serial_BigInt(
  options?: Random_Serial_BigInt_Interface
): bigint {
  const min = options?.min || "-1e100";
  const max = options?.max || "1e100";
  return BigInt(randBetween(min.toString(), max.toString()).toString());
}
/**
 * For Internal Use
 */
const JSSystem = new System();
/**
 * Wrapping JSSystem.getClasses
 * For Public Use
 * @function JSS.JSSystemGetClasses
 * @throws {ClassNotFoundError} Class Not Found
 * @param className {string} The name of the registered class that you are looking for
 * @returns {JSClass[]} The array of class object where the class name is the same as the lookup registered class name
 */
function JSSystemGetClasses(className: string): JSClass[] {
  return JSSystem.getClasses(className);
}
/**
 * Wrapping JSSystemGetClass and return the first index
 * For Public Use
 * @see {@link JSSystemGetClasses}
 * @function JSS.JSSystemGetClass
 * @throws {ClassNotFoundError} Class Not Found
 * @param className {string} The name of the registered class that you are looking for
 * @returns {JSClass} The class object
 */
function JSSystemGetClass(className: string): JSClass {
  return JSSystemGetClasses(className)[0];
}
/**
 * Wrapping JSSystem.getAllClasses
 * For Public Use
 * @function JSS.JSSystemGetAllClasses
 * @returns {JSClass[]} The array of every registered class objects.
 */
function JSSystemGetAllClasses(): JSClass[] {
  return JSSystem.getAllClasses();
}
export {
  JSSystem,
  JSSystemGetClasses,
  JSSystemGetClass,
  JSSystemGetAllClasses,
  Random_Serial_BigInt,
};
export type { Random_Serial_BigInt_Interface };
