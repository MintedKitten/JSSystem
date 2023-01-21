declare class JSClass {
    #private;
    constructor({ className, serial }: {
        className: String;
        serial: bigint;
    });
    getClass(): JSClass;
    getName(): String;
    getSerialBigInt(): bigint;
    isEquals(jsclass: JSClass): boolean;
}
export { JSClass };
