import {
  JSSystemGetClasses,
  JSSystemGetAllClasses,
  JSSystemGetClass,
} from "../src";
import { ClassNotFoundError } from "../src/lang/ClassNotFoundError";
import { NewClass } from "./NewClass";

const newob = new NewClass();
newob.getClass();
const cls = JSSystemGetAllClasses();
cls.forEach((jsclass) => {
  console.log(jsclass.getName());
});

try {
  const classOb = JSSystemGetClass("JSObject");
} catch (e) {
  if (e.getClass() === JSSystemGetClasses("ClassNotFoundError")[0]) {
    const error = e as ClassNotFoundError;
    console.log(`A: ${error.name}`);
    console.log(`B: ${error.message}`);
    console.error(error.stack);
  }
}

try {
  const classOb = JSSystemGetClass("NewClass");
  console.log(`${classOb.getName()} is registered`);
} catch (e) {
  if (e.getClass() === JSSystemGetClasses("ClassNotFoundError")[0]) {
    const error = e as ClassNotFoundError;
    console.log(`A: ${error.name}`);
    console.log(`B: ${error.message}`);
    console.log(`C: ${error.stack}`);
    console.error(error.stack);
  }
}
