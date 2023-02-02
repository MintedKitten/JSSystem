import { JSClass } from "./lang/JSClass";
/**
 * JSS System Class. The class that keeps everything in check.
 * @class JSS.System
 */
declare class System {
    #private;
    /**
     * Should not, and will not do anything.
     */
    constructor();
    /**
     * When an object of a class is created, that class will attempt to register a class object by passing a class name into this function.
     * If that class name has never been register, this will create a new class object, store it, and return it. If that class name has been register, the corresponding class object will be return.
     * @param className {string} The name of the class. Usually retrieve from the private object {#Class_Name = this.constructor.name} from the baseclass.
     * @returns The class object in Object {JSClass}
     */
    addClass(className: string, serialBigint: bigint): JSClass;
    /**
     * Attempt to find registered class with the specify name. Because javascript allow duplicate class name, namy registered class object can be return. If the class has not been registered, an error will be thrown.
     * @throws {ClassNotFoundError} Class Not Found
     * @param className {string} The name of the registered class that you are looking for.
     * @returns {JSClass[]} The array of class objects where the class name is the same as the lookup registered class name.
     */
    getClasses(className: string): JSClass[];
    /**
     * Get every registered class objects.
     * @returns {JSClass[]} The array of every registered class objects.
     */
    getAllClasses(): JSClass[];
    /**
     * Try to convert the object to a class.
     * Require the class type and class name to be the same.
     * @T {type} The type to be converted to.
     * @param .object {any} The object to be converted.
     * @param .className {string} The name of the registered class.
     * @returns {boolean | undefined} If object can be converted, will return the object after converted; otherwise return undefined.
     */
    tryBecomeClass<T>({ object, className, }: Try_Become_Class_Interface): T | undefined;
}
interface Try_Become_Class_Interface {
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
declare function Random_Serial_BigInt(options?: Random_Serial_BigInt_Interface): bigint;
/**
 * For Internal Use
 */
declare const JSSystem: System;
/**
 * Wrapping JSSystem.getClasses for public use.
 * @function JSS.JSSystemGetClasses
 * @throws {ClassNotFoundError} Class Not Found
 * @param className {string} The name of the registered class that you are looking for.
 * @returns {JSClass[]} The array of class object where the class name is the same as the lookup registered class name.
 */
declare function JSSystemGetClasses(className: string): JSClass[];
/**
 * Wrapping JSSystemGetClass for public use.
 * Call JSSystemGetClasses and return the first index.
 * @see {@link JSSystemGetClasses}
 * @function JSS.JSSystemGetClass
 * @throws {ClassNotFoundError} Class Not Found
 * @param className {string} The name of the registered class that you are looking for.
 * @returns {JSClass} The class object where the class name is the same as the lookup registered class name.
 */
declare function JSSystemGetClass(className: string): JSClass;
/**
 * Wrapping JSSystem.getAllClasses for public use.
 * @function JSS.JSSystemGetAllClasses
 * @returns {JSClass[]} The array of every registered class objects.
 */
declare function JSSystemGetAllClasses(): JSClass[];
/**
 * Wrapping JSSystem.tryBecomeClass for public use.
 * Try to convert the object to a class.
 * Require the class type and class name to be the same.
 * @T {type} The type to be converted to.
 * @param .object {any} The object to be converted.
 * @param .className {string} The name of the registered class.
 * @returns {boolean | undefined} If object can be converted, will return the object after converted; otherwise return undefined.
 */
declare function JSSystemTryBecomeClass<T>({ object, className, }: Try_Become_Class_Interface): ReturnType<typeof JSSystem.tryBecomeClass<T>>;
export { JSSystem, JSSystemGetClasses, JSSystemGetClass, JSSystemGetAllClasses, JSSystemTryBecomeClass, Random_Serial_BigInt, };
export type { Random_Serial_BigInt_Interface };
