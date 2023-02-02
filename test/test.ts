import {
  JSSystemGetClass,
  JSSystemTryBecomeClass,
  ClassNotFoundError,
} from "../src";
import { NewClass } from "./NewClass";

const newob = new NewClass();

try {
  const classOb = JSSystemGetClass("JSObject");
  console.log(`${classOb.getName()} is registered`);
} catch (e) {
  const error = JSSystemTryBecomeClass<ClassNotFoundError>({
    object: e,
    className: "ClassNotFoundError",
  });
  if (error) {
    console.log(`A: ${error.name}`);
    console.log(`B: ${error.message}`);
    console.error(error.stack);
  } else {
    console.log("Unknown Error");
  }
}

try {
  const classOb = JSSystemGetClass("NewClass");
  console.log(`${classOb.getName()} is registered`);
} catch (e) {
  const error = JSSystemTryBecomeClass<ClassNotFoundError>({
    object: e,
    className: "ClassNotFoundError",
  });
  if (error) {
    console.log(`A: ${error.name}`);
    console.log(`B: ${error.message}`);
    console.error(error.stack);
  } else {
    console.log("Unknown Error");
  }
}
