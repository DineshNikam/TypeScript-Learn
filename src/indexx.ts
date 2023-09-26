// //- number  :
// // ts
// let num : number = 2

// //- string
// 	// ts
// 	let str : string = "abc"

// //- boolean:
// // ts
// let isTrue : boolean  = true

// //- Array :
// //  ts
//  let nums :  number[]  = [1,2,3]

// //- Tuples:
// // ts
// let tup : [number, string] = [1,"abc"]

// //- enum
// // ts
// enum Size { Small =1 , Medium , Large }//starting at 1 default is 0

class Account {
  readonly id: number; // make variables readonly and not cahngable once assinned in constructor
  owner: string;
  private _balance: number; //make variable private to class
  nickname?: string; // add '?' to make variable optional
  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this._balance = balance;
    this.owner = owner;
  }
  private calculateTax() {} // making methods Priate
  deposite(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    }
    this._balance += amount;
  }

  //----- Getter and Setters
  get balance(): number {
    return this._balance;
  }
  //   set balance(amount: number) {
  //     if (amount <= 0) {
  //       throw new Error("Invalid amount");
  //     }
  //     this._balance += amount;
  //   }
}

let acc = new Account(1, "Dinesh", 0);
acc.deposite(400);

//---- Index Signature Property-----
class SeatAssignment {
  //Index signature Property
  [seatNumber: string]: string;
}
let seats = new SeatAssignment();
seats.A1 = "Dinesh";

//--- Static Variavbles/ methods -----------
class Ride {
  private static _activeRides: number = 0;
  start() {
    Ride._activeRides++;
  }
  stop() {
    Ride._activeRides--;
  }

  static get activeRides() {
    return Ride._activeRides;
  }
}
let ride1 = new Ride();

let ride2 = new Ride();

ride1.start();
ride2.start();
ride2.stop();
// console.log(Ride.activeRides);

//------Inheritance -----------

// class Person {
//   constructor(public firstName: string, public lastName: string) {}
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
//   walk() {
//     console.log("walking..");
//   }
// }
// class Student extends Person {
//   //extends keywords is used to inherit
//   constructor(public studentId: number, firstName: string, lastName: string) {
//     super(firstName, lastName); //passing parameters to Parent class constructor
//   }
//   takeTest() {
//     console.log("Taking Test");
//   }
// }

// let s = new Student(1, "dinesh", "nikam");
// console.log(s.walk);
// console.log(s.takeTest);
// s.walk();

//---------- Method Overriding ------------

// class Teacher extends Person {
//   //use KEyword Override to override a method from Parent class
//   override get fullName() {
//     return `Professor ${super.fullName}`;
//   }
// }
// var t1 = new Teacher("John", "Smith");
// //console.log(t1.fullName);

// // === Polymorphism----------

// function printNames(persons: Person[]) {
//   for (let person of persons) {
//     console.log(person.fullName);
//   }
// }

// printNames([new Student(1, "Dinesh", "Nikam"), new Teacher("dinesh", "nikam")]);

//---  abstract classes ------

abstract class Shape {
  constructor(public color: string) {}
  abstract render(): void;
}

class Circle extends Shape {
  constructor(color: string) {
    super(color);
  }

  override render() {
    console.log("Render Circle");
  }
}

let t = new Circle("red");
// t.render();

// ------------------ Interfaces -----------

interface Calendar {
  name: string;
  addEvent(): void;
}

// inheritence Interface To Interface

interface CloudeCal extends Calendar {
  sync(): void;
}

class GoogleCal implements Calendar {
  constructor(public name: string) {}
  addEvent(): void {
    throw new Error("Method not implemented.");
  }
}
