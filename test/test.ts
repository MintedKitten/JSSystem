import { IllegalArgumentException } from "../build";
import { TestClass } from "./TestClass";

const newob = new TestClass();

console.log(newob.toString());
console.log(newob.hashCode());

function Afunc1() {
  console.log("before 2");
  Afunc2("thing");
  console.log("Override empty");
}

function Afunc2(message: string) {
  console.log("before 3");
  Afunc3(message, 1234);
  console.log("Override only message");
}

function Afunc3(message: string, num: number) {
  console.log("before main");
  console.log(message, num);
  console.log("Main function");
}

interface Afunc_Params_Interface {
  message?: string | undefined;
  num?: number | undefined;
}

function Afunc(params?: Afunc_Params_Interface) {
  let _params: Afunc_Params_Interface;
  if (params === undefined) {
    // undefined params = {} params
    _params = {};
  } else {
    _params = params;
  }
  let { message, num } = _params;
  let overrideFuncsArray: Array<Function> = [];
  // Overload 1
  if (message === undefined && num === undefined) {
    console.log("before 2");
    message = "thing";
    function _aftercall() {
      console.log("Override empty");
    }
    overrideFuncsArray.splice(0, 0, _aftercall);
  }
  // Overload 2
  if (message !== undefined && num === undefined) {
    console.log("before 3");
    message = message;
    num = 1234;
    function _aftercall() {
      console.log("Override only message");
    }
    overrideFuncsArray.splice(0, 0, _aftercall);
  }
  // Main
  if (message !== undefined && num !== undefined) {
    function defaultcall() {
      console.log("before main");
      console.log(message, num);
      console.log("Main function");
    }
    overrideFuncsArray.splice(0, 0, defaultcall);
  }
  if (overrideFuncsArray.length > 0) {
    for (const _call of overrideFuncsArray) {
      _call();
    }
  } else {
    throw new IllegalArgumentException({
      message: "No overloading function matched",
    });
  }
}
try {
  Afunc({ num: 2 });
} catch (e) {
  console.error(e.stack);
}

function test(params: string): number;
function test(params: number): string;

function test(params: string | number): string | number {
  if (typeof params === "string") {
    return params.length;
  } else {
    return params.toString();
  }
}
