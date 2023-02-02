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
    #JSClasses = [];
    /**
     * Should not, and will not do anything.
     */
    constructor() { }
    /**
     * When an object of a class is created, that class will attempt to register a class object by passing a class name into this function.
     * If that class name has never been register, this will create a new class object, store it, and return it. If that class name has been register, the corresponding class object will be return.
     * @param className {string} The name of the class. Usually retrieve from the private object {#Class_Name = this.constructor.name} from the baseclass.
     * @returns The class object in Object {JSClass}
     */
    addClass(className, serialBigint) {
        let jsclass = undefined;
        for (let index = 0; index < this.#JSClasses.length; index++) {
            const tempclass = this.#JSClasses[index];
            if (tempclass.getName() === className &&
                tempclass.getSerialBigInt() === serialBigint) {
                jsclass = this.#JSClasses[index];
            }
        }
        if (jsclass !== undefined) {
            // The class has already been registered, return the class object.
            return jsclass;
        }
        else {
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
    getClasses(className) {
        const _jsclasses = [];
        this.#JSClasses.forEach((jsclass) => {
            if (className === jsclass.getName()) {
                _jsclasses.push(jsclass);
            }
        });
        if (_jsclasses.length > 0) {
            return _jsclasses;
        }
        else {
            throw new ClassNotFoundError("Class Not Found");
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
    tryBecomeClass({ object, className, }) {
        try {
            const jsclasses = this.getClasses(className);
            let isCompatible = false;
            jsclasses.forEach(function (jsclass) {
                if (object.getClass() === jsclass) {
                    isCompatible = true;
                }
            });
            if (isCompatible) {
                return object;
            }
            else {
                throw new Error("Not Convertable, Throw new Error to be catch");
            }
        }
        catch (e) {
            // Either error from not convertable, or object isn't a JSObject.
            return undefined;
        }
    }
}
/**
 * Randomly generated bigint. Made for class serial bigint.
 * @function JSS.Random_Serial_BigInt
 * @param options {Random_Serial_BigInt_Interface} The option for @function{Random_Serial_BigInt}
 * @returns {bigint} A bigint
 */
function Random_Serial_BigInt(options) {
    const min = options?.min || "-1e100";
    const max = options?.max || "1e100";
    return BigInt(randBetween(min.toString(), max.toString()).toString());
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
function JSSystemGetClasses(className) {
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
function JSSystemGetClass(className) {
    return JSSystemGetClasses(className)[0];
}
/**
 * Wrapping JSSystem.getAllClasses for public use.
 * @function JSS.JSSystemGetAllClasses
 * @returns {JSClass[]} The array of every registered class objects.
 */
function JSSystemGetAllClasses() {
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
function JSSystemTryBecomeClass({ object, className, }) {
    return JSSystem.tryBecomeClass({ object: object, className: className });
}
export { JSSystem, JSSystemGetClasses, JSSystemGetClass, JSSystemGetAllClasses, JSSystemTryBecomeClass, Random_Serial_BigInt, };
