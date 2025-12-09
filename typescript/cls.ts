class Device {
name = "lg";
price = 12000;
category = "digital";
}
let d1 = new Device();
let d2 = new Device();  
console.log(d1);
console.log(d2);


class Bottle{
    constructor(public name : string , public price : number , public colour : string){

    }
}

let b1 = new Bottle("Milton" , 12200, "pink");
let b2 = new Bottle("Cello" , 2900, "red");
console.log(b1);
console.log(b2);

class Music{
    constructor(public name :string,public artist : string, public thumbnail:string="empty",public length : number,public free : boolean ){
        if(!thumbnail){
            this.thumbnail = "Default cover.jpg"
        }
    }
}

const m1 = new Music("Khuch bhi karlo","swastik the band","",3,true);
m1.name = "Khuch bhi MATT karlo"
console.log(m1);

class Name{
    name = "Shashwat";
    changeName(){
        this.name = "Riya Rautela"; //class ke andar kisi bhi variable ko access 
        //karoge toh we will have to use this keyword
    }
}

// access modifiers
class BottleMaker{
    constructor(public name : string){} //here we can use the private keyword
    //also and this will hold the parameter into private feild so that u cant use it again to change values 
    //inside the same class even if it is pvt we can change 
         changing(){
            this.name = "Shashwat ki bottle"
        }
}

let bottle = new BottleMaker("Milton");
console.log(bottle.name = "Cello");
bottle.changing(); //changes the name
console.log(bottle.name);
