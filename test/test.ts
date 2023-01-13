import { JSObject } from "../src";
import { NewClass as NewClassA } from "./NewClass";
import { NewClass as NewClassB } from "./DupNameClass";

const jsob1 = new JSObject();
const jsob2 = new JSObject();

const newob1 = new NewClassA();
const newob2 = new NewClassA();

const newob3 = new NewClassB();

console.log(jsob1.getClass() === newob1.getClass()); // false
console.log(jsob1.getClass() === jsob1.getClass()); // true
console.log(jsob1.getClass() === jsob2.getClass()); // true
console.log(newob1.getClass() === newob2.getClass()); // true
console.log(newob1.getClass() === newob3.getClass()); // true

console.log(jsob1.getClass().getName());
console.log(newob1.getClass().getName());
console.log(jsob2.getClass().getName());
console.log(newob2.getClass().getName());
