"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shery {
    static version = 1;
}
console.log(Shery.version);
//abstract classes 
class CookingEssentials {
    gas;
    gasKaName;
    constructor(gas, gasKaName) {
        this.gas = gas;
        this.gasKaName = gasKaName;
    }
}
class Sabji extends CookingEssentials {
}
class Cake extends CookingEssentials {
}
// here we dont have to instansiate a new class object
//# sourceMappingURL=static.js.map