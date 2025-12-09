"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Device {
    name = "lg";
    price = 12000;
    category = "digital";
}
let d1 = new Device();
let d2 = new Device();
console.log(d1);
console.log(d2);
class Bottle {
    name;
    price;
    colour;
    constructor(name, price, colour) {
        this.name = name;
        this.price = price;
        this.colour = colour;
    }
}
let b1 = new Bottle("Milton", 12200, "pink");
let b2 = new Bottle("Cello", 2900, "red");
console.log(b1);
console.log(b2);
class Music {
    name;
    artist;
    thumbnail;
    length;
    free;
    constructor(name, artist, thumbnail = "empty", length, free) {
        this.name = name;
        this.artist = artist;
        this.thumbnail = thumbnail;
        this.length = length;
        this.free = free;
        if (!thumbnail) {
            this.thumbnail = "Default cover.jpg";
        }
    }
}
const m1 = new Music("Khuch bhi karlo", "swastik the band", "", 3, true);
m1.name = "Khuch bhi MATT karlo";
console.log(m1);
class Name {
    name = "Shashwat";
    changeName() {
        this.name = "Riya Rautela"; //class ke andar kisi bhi variable ko access 
        //karoge toh we will have to use this keyword
    }
}
// access modifiers
class BottleMaker {
    name;
    constructor(name) {
        this.name = name;
    } //here we can use the private keyword
    //also and this will hold the parameter into private feild so that u cant use it again to change values 
    //inside the same class even if it is pvt we can change 
    changing() {
        this.name = "Shashwat ki bottle";
    }
}
let bottle = new BottleMaker("Milton");
console.log(bottle.name = "Cello");
bottle.changing(); //changes the name
console.log(bottle.name);
//# sourceMappingURL=cls.js.map