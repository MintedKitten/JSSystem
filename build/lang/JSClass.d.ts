declare class JSClass {
    #private;
    constructor({ className, serial }: {
        className: string;
        serial: bigint;
    });
    getClass(): JSClass;
    getName(): string;
    getSerialBigInt(): bigint;
    isEquals(jsclass: JSClass): boolean;
}
export { JSClass };
