import { JSClass } from "./JSClass";
/**
 * JSS Object Class. The superclass of every class
 */
declare class JSObject {
    #private;
    /**
     * Contrustor. Object is superclass, so there's no super class contrustor to be called.
     * Every subclass should create a unique serial bigint, to avoid the same class name collision.
     */
    constructor(serialBigInt?: bigint);
    /**
     * Get the registered class object of this class.
     * @returns {JSClass} The registered class object of the baseclass.
     */
    getClass(): JSClass;
    /**
     * Return the string representation of this object. Default implementation return the name of the baseclass.
     * @returns The name of the class.
     */
    toString(): String;
    /**
     *
     * @returns
     */
    hashCode(): bigint;
    /**
     * Compares two Objects for equality.
     * Returns a boolean that indicates whether this Object is equivalent
     * to the specified Object. This method is used when an Object is stored
     * in a hashtable.
     * @param ob
     * @returns
     */
    isEquals(ob: JSObject): boolean;
}
export { JSObject };
