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
    set serial(serialBigInt: bigint);
    getClass(): JSClass;
    toString(): string;
}
export { JSObject };
