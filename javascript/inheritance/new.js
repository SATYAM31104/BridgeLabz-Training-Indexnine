// const dude = {};
// console.log(dude.toString());
// dude.name = "shashwat";
// dude.age = "21";
// console.log(dude);

// const Human = {
//     kind : 'human'
// }
// const sina = Object.create(Human);
// sina.age=21;
// const ben = Object.create(sina);
// ben.age = 24;

// //prototype in constructor functions 
// function Dude (name){
//     this.name = name;
// }
// const me = new Dude('shashwat');
// console.log(me);


class Person {
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
    setRoll(roll){
        return this.roll = roll;
    }
    getAge(){
        return this.age;
    }
}

const person1 = new Person ("shashwat" , 21);
// console.log(person1.getAge());
// console.log(person1.setRoll(828));

Person.prototype.talk = function(){
    console.log("Hello i am talking");
}

// console.log(person1.talk());

class Engineer extends Person{
    work(){
        console.log("I am working");
    }
    eat(){
        console.log("I am eating")
    }
}

const person2 = new Engineer("Leo" , 33);
console.log(person2.work());
console.log(person2.talk());
console.log(person2.getAge());


const person = {
  name: "Shashwat srivastava",
  age: 21,
  roll: 828,
  talk: function () {
    console.log(`my name is ${this.name} and I am talking`);
  }
};

const obj = Object.create(person);

obj.talk();