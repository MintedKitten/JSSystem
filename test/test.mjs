import { Person } from "./Person.mjs";

const emp01 = new Person({ firstname: "Jon", lastname: "Can", salary: 10000 });

console.log(`${emp01.FirstName} ${emp01.LastName}, ${emp01.Salary}`);
emp01.LastName = "Marc";
console.log(`${emp01.FirstName} ${emp01.LastName}, ${emp01.Salary}`);
