import {
  IllegalArgumentException,
  JSSystemTryBecomeClass
} from "../build/index.mjs";
import { TestClass as TestClass2 } from "./class2/TestClass.mjs";
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
function Afunc2(message) {
  console.log("before 3");
  Afunc3(message, 1234);
  console.log("Override only message");
}
function Afunc3(message, num) {
  console.log("Main Begin");
  console.log(message, num);
  console.log("Main End");
}
function Afunc(params) {
  let _params;
  if (params === void 0) {
    _params = {};
  } else {
    _params = params;
  }
  let { message, num } = _params;
  let overrideFuncsArray = [];
  if (message === void 0 && num === void 0) {
    let _aftercall2 = function() {
      console.log("Override empty");
    };
    var _aftercall = _aftercall2;
    console.log("before 2");
    message = "thing";
    overrideFuncsArray.splice(0, 0, _aftercall2);
  }
  if (message !== void 0 && num === void 0) {
    let _aftercall2 = function() {
      console.log("Override only message");
    };
    var _aftercall = _aftercall2;
    console.log("before 3");
    message = message;
    num = 1234;
    overrideFuncsArray.splice(0, 0, _aftercall2);
  }
  if (message !== void 0 && num !== void 0) {
    let defaultcall2 = function() {
      console.log("Main Begin");
      console.log(message, num);
      console.log("Main End");
    };
    var defaultcall = defaultcall2;
    overrideFuncsArray.splice(0, 0, defaultcall2);
  }
  if (overrideFuncsArray.length > 0) {
    for (const _call of overrideFuncsArray) {
      _call();
    }
  } else {
    throw new IllegalArgumentException({
      message: "No overloading function matched"
    });
  }
}
try {
  const num = 5;
  const message = "al";
  Afunc({ message, num });
} catch (e) {
  const error = JSSystemTryBecomeClass({
    object: e,
    className: "IllegalArgumentException"
  });
  if (error) {
    console.log(error.stack);
  }
}