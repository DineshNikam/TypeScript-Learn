class Logger {
  constructor(public fileName: string) {}
  writeToFile(data: string) {
    console.log("Write to file");
  }
}

// class Person {
//   constructor(public firstName: string, public lastName: string) {}
// }

// class Employee extends Person {
//   constructor(public salary: number, firstName: string, lastName: string) {
//     super(firstName, lastName);
//   }
// }

interface Employee {
  name: string;
  salary: number;
  address: { street: string; city: string; zipcode: number };
}

let employee: Employee = {
  name: "d",
  salary: 123,
  address: { street: "string", city: "string", zipcode: 2123 },
};
