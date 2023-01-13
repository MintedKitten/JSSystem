import { JSClass } from "./lang/JSClass";
import { randBetween } from "big-integer";
import { randomBytes } from "crypto";

const __inner_jsclass_name = "JSClass";

/**
 * JSS System Class. The class that keeps everything in check.
 */
class System {
  /**
   * Any new class that is created with JSObject will create a class object and store it inhere.
   */
  #JSClasses: JSClass[] = [];
  /**
   * Should not and will not do anything.
   */
  constructor() {}
  /**
   * When an object of a class is created, that class will attempt to register a class object by passing a class name into this function.
   * If that class name has never been register, this will create a new class object, store it, and return it. If that class name has been register, the corresponding class object will be return.
   * @param className {String} The name of the class. Usually retrieve from the private object {#Class_Name = this.constructor.name} from the baseclass.
   * @returns The class object in Object {JSClass}
   */
  public addClass(className: string, serialBigint: bigint): JSClass {
    for (let index = 0; index < this.#JSClasses.length; index++) {
      const tempclass = this.#JSClasses[index];
      if (
        tempclass.getName() === className &&
        tempclass.getSerialBigInt() === serialBigint
      ) {
        return this.#JSClasses[index];
      }
    }
    // Exception for class object {JSClass}. To avoid recursively calling it self.
    // if (className === __inner_jsclass_name) {
    //   const jsclass = new JSClass({
    //     className: __inner_jsclass_name,
    //     serial: serialBigint,
    //   });
    //   this.#JSClasses.push(jsclass);
    //   return jsclass;
    // }
    const jsclass = new JSClass({ className: className, serial: serialBigint });
    this.#JSClasses.push(jsclass);
    return jsclass;
  }
  /**
   *Attempt to
   * @param className {String}
   * @returns
   */
  public getClass(className: string): JSClass {
    const _jsclass = this.#JSClasses.find((jsclass) => {
      if (className === jsclass.getName()) {
        return jsclass;
      }
    });
    if (_jsclass) {
      return _jsclass;
    } else {
      throw new Error("Class Not Found");
    }
  }

  public getAllClasses() {
    return this.#JSClasses;
  }
}
const JSSystem = new System();

interface Random_Serial_BigInt_Interface {
  min?: bigint;
  max?: bigint;
}

function Random_Serial_BigInt(options?: Random_Serial_BigInt_Interface) {
  const min = options?.min || "-1e100";
  const max = options?.max || "1e100";
  return BigInt(randBetween(min.toString(), max.toString()).toString());
}
export { JSSystem, Random_Serial_BigInt };
