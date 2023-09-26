"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this._balance = balance;
        this.owner = owner;
    }
    calculateTax() { }
    deposite(amount) {
        if (amount <= 0) {
            throw new Error("Invalid amount");
        }
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
}
let acc = new Account(1, "Dinesh", 0);
acc.deposite(400);
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = "Dinesh";
class Ride {
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
Ride._activeRides = 0;
let ride1 = new Ride();
let ride2 = new Ride();
ride1.start();
ride2.start();
ride2.stop();
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        console.log("Render Circle");
    }
}
let t = new Circle("red");
class GoogleCal {
    constructor(name) {
        this.name = name;
    }
    addEvent() {
        throw new Error("Method not implemented.");
    }
}
//# sourceMappingURL=indexx.js.map