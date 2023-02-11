import { TestClass } from "./testClass";

const newob = new TestClass();

const r = { a: 1, b: 2, c: 3 };

let { a, b, c } = r;
a = 5;

console.log(newob.toString());
console.log(newob.hashCode());

/**
 * function Afunc(){
 *  Afunc("thing");
 *  console.log("Override empty");
 * }
 *
 * function Afunc(message: string){
 *  Afunc(message, 1234);
 *  console.log("Override only message");
 * }
 *
 * function Afunc(message: string, num: number){
 *  console.log(message, num);
 *  console.log("Main function");
 * }
 *
 * --====--
 *
 * interface Afunc_Params_Interface {
 *   message: string;
 *   num: number | undefined;
 * }
 * function Afunc(params?: Afunc_Params_Interface){
 *  let _message = "";
 *  let _num = 0;
 *  if (params === undefined){
 *    _message = "thing";
 *  }else{
 * let {message, num} = params;
 * if (m)
 * }
 * }
 */
