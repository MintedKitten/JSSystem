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

  public demoError(): string {
    
    return "Should be error!";
  }
}

export { NewClass };
