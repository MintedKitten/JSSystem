/**
 * JSS Throwable class. The base of every throwable class in JSS
 * @class JSS.lang.Throwable
 */
interface JSClass_Contructor_Interface {
    /**
     * The class name
     */
    className: string;
    /**
     * The serial bigint
     */
    serial: bigint;
}
/**
 * The class of the class object. Use for class comparison.
 * @class JSS.lang.JSClass
 */
declare class JSClass {
    #private;
    constructor({ className, serial }: JSClass_Contructor_Interface);
    getClass(): JSClass;
    getName(): string;
    getSerialBigInt(): bigint;
    isEquals(jsclass: JSClass): boolean;
}
export { JSClass };
