import { JSClass } from "./lang/JSClass";
/**
 * JSS System Class. The class that keeps everything in check.
 */
declare class System {
    #private;
    /**
     * Should not and will not do anything.
     */
    constructor();
    /**
     * When an object of a class is created, that class will attempt to register a class object by passing a class name into this function.
     * If that class name has never been register, this will create a new class object, store it, and return it. If that class name has been register, the corresponding class object will be return.
     * @param className {String} The name of the class. Usually retrieve from the private object {#Class_Name = this.constructor.name} from the baseclass.
     * @returns The class object in Object {JSClass}
     */
    addClass(className: string, serialBigint: bigint): JSClass;
    /**
     * Attempt to find registered class with the specify name. Because javascript allow duplicate class name, namy registered class object can be return. If the class has not been registered, an error will be thrown.
     * @throws {Error} Class Not Found
     * @param className {String} The name of the registered class that you are looking for
     * @returns The array with the class objects
     */
    getClass(className: string): JSClass[];
    getAllClasses(): JSClass[];
}
declare const JSSystem: System;
interface Random_Serial_BigInt_Interface {
    min?: bigint;
    max?: bigint;
}
declare function Random_Serial_BigInt(options?: Random_Serial_BigInt_Interface): bigint;
export { JSSystem, Random_Serial_BigInt };
