import {
  IllegalArgumentException,
  JSSystemGetAllClasses,
  JSSystemGetClass,
  JSSystemTryBecomeClass,
} from "../build";
import { TestClass as TestClass1 } from "./class1/TestClass";
import { TestClass as TestClass2 } from "./class2/TestClass";
import { TestClass as TestClass3 } from "./class3/TestClass";

// const test1 = new TestClass1();
// const test2 = new TestClass2();
// const test3 = new TestClass3();
// console.log("Raw: " + test3.name);
// const mttest3 = TestClass3.newEmptyObject();
// mttest3.name = "Carl"
// console.log(`${JSON.stringify(mttest3)}`);
// test3.name = "test";
// test3.email = "test@email";
// console.log("test3: " + test3.name);
// const test4 = test3.clone();
// console.log("test4: " + test4.name);

// console.log("Module:" + process.env.npm_package_version);

const t2 = new TestClass2();
t2.name = "Tom";
const serled = JSON.stringify(t2);
console.log(serled);
const parsed = JSON.parse(serled);
const t2_2 = TestClass2.fromJSON(parsed);
console.log(t2_2);

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
  console.log("Main Begin");
  console.log(message, num);
  console.log("Main End");
}

interface Afunc_Params_Interface {
  message?: string | undefined;
  num?: number | undefined;
}

/**
 * A tsdocs
 */
function Afunc(): void;
function Afunc({}): void;
/**
 * C tsdocs
 * @param .message {string}
 */
function Afunc({ message }: { message: string }): void;
/**
 * D tsdocs
 * @param .message {string}
 * @param .num {num}
 */
function Afunc({ message, num }: { message: string; num: number }): void;

function Afunc(params?: Afunc_Params_Interface): void {
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
      console.log("Main Begin");
      console.log(message, num);
      console.log("Main End");
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
  const num = 5;
  const message = "al";
  Afunc({ message,num });
} catch (e) {
  const error = JSSystemTryBecomeClass<IllegalArgumentException>({
    object: e,
    className: "IllegalArgumentException",
  });
  if (error) {
    console.log(error.stack);
  }
}
