class BottleMaker{
    private food : string = "Halua";
    constructor(private name : string){} //yeh pvt hai so extend karke aage use nahi kar sakte hain

}

class MetalBottle extends BottleMaker{
    constructor(name : string){
        super(name); //yeh humne upar waali class ko kaam de diya to set name
    }
    getValue(){
        console.log(this.name);
    }
}

let b1 = new MetalBottle("Randa");
let b2 = new MetalBottle("Bottle Name");
console.log(b2.food);
console.log(b1);

class botal{
    public name : string = "shashwat"
}
class newBotal extends botal{
    public material : string = "Steel"
}

let botal1 = new newBotal();
console.log(botal1);