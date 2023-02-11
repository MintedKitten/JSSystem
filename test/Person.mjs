import { JSObject } from "../build/index.mjs";

class Person extends JSObject {
  _firstname = "";
  _lastname = "";
  _salary = 0;
  /**
   * This is a constructor
   * @param {{firstname:string,lastname: string,salary:number}}
   */
  constructor({ firstname, lastname, salary }) {
    this._firstname = firstname;
    this._lastname = lastname;
    this._salary = salary;
  }
  get FirstName() {
    return this._firstname;
  }
  set FirstName(fname) {
    this._firstname = fname;
  }
  get LastName() {
    return this._lastname;
  }
  set LastName(lname) {
    this._lastname = lname;
  }
  get Salary() {
    return this._salary;
  }
  set Salary(sal) {
    this._salary = sal;
  }
}
export { Person };
