import { IllegalArgumentException } from "../build/index.mjs";
import { TestClass } from "./TestClass.mjs";
const newob = new TestClass();
console.log(newob.toString());
console.log(newob.hashCode());
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
  console.log("before main");
  console.log(message, num);
  console.log("Main function");
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
    let _aftercall2 = function() {
      console.log(message, num);
      console.log("Main function");
    };
    var _aftercall = _aftercall2;
    console.log("before main");
    overrideFuncsArray.splice(0, 0, _aftercall2);
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
  Afunc({ num: 2 });
} catch (e) {
  console.error(e.stack);
}