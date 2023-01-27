import { JSObject, Random_Serial_BigInt } from "../src";

/**
 * Serial BigInt
 */
const __inner_serial_bigint = Random_Serial_BigInt();

class NewClass extends JSObject {
  #Class_Serial = __inner_serial_bigint;

  constructor() {
    super(__inner_serial_bigint);
  }

  public toString() {
    return "";
  }
}

const testerr = new Error;
Error.stackTraceLimit = Number.POSITIVE_INFINITY;
Error.captureStackTrace(testerr)
console.log(testerr.stack)

export { NewClass };
