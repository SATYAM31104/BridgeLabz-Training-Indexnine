"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BottleMaker {
    name;
    food = "Halua";
    constructor(name) {
        this.name = name;
    } //yeh pvt hai so extend karke aage use nahi kar sakte hain
}
class MetalBottle extends BottleMaker {
    constructor(name) {
        super(name); //yeh humne upar waali class ko kaam de diya to set name
    }
    getValue() {
        console.log(this.name);
    }
}
let b1 = new MetalBottle("Randa");
let b2 = new MetalBottle("Bottle Name");
console.log(b2.food);
console.log(b1);
class botal {
    name = "shashwat";
}
class newBotal extends botal {
    material = "Steel";
}
let botal1 = new newBotal();
console.log(botal1);
//# sourceMappingURL=access.js.map