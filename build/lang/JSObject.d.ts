import { JSClass } from "./JSClass";
interface Serial_BigInt {
    serialBigInt: bigint;
}
/**
 * JSS Object Class. The superclass of every class
 * @class JSS.lang.JSObject
 */
declare class JSObject {
    #private;
    /**
     * Contrustor. Object is superclass, so there's no super class contrustor to be called.
     * Every subclass should create a unique serial bigint, to avoid the same class name collision.
     * Recommended to enter unique serial bigint. Or use Random_Serial_BigInt to randomly generated one.
     * @param serialBigInt {bigint} The serial bigint of the object.
     * @see Random_Serial_BigInt
     */
    constructor(serialBigInt?: Serial_BigInt);
    /**
     * Get the registered class object of this class.
     * @returns {JSClass} The registered class object of the baseclass.
     */
    getClass(): JSClass;
    /**
     * Return the string representation of this object. Default implementation return the name of the baseclass.
     * @returns {string} The name of the class.
     */
    toString(): string;
    /**
     * Return a hash as bigint. Each object should have a unique hash.
     * @returns {bigint} The hash bigint.
     */
    hashCode(): bigint;
    /**
     * Compares two JSObjects for equality.
     * Returns a boolean that indicates whether this Object is equivalent
     * to the specified Object. This method is used when an Object is stored
     * in a hashtable.
     * @param ob {JSObject} The object to compare to.
     * @returns {boolean} Return true, if it is the same object. Otherwise false.
     */
    isEquals(ob: JSObject): boolean;
    /**
     * Check whether this object has the method.
     * @param methodName {string} The name of the method to check the existance of.
     * @returns {boolean} Return true, if the method exists; Otherwise false.
     */
    canCall(methodName: string): boolean;
}
export { JSObject };
export type { Serial_BigInt };
