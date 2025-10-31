const me ={
    talk() {
        return 'talking';
    }
}
console.log(me.talk());

class Person {
    talk() { 
        return 'talking in class';
    }
}

class GAY {
    greet(name){
        return`greething ${name}`;
    }
}

const wait=new GAY();
console.log(wait.greet('shashwat'));

const you = new Person(); // object.create expects and object and not a class
console.log(you.talk());

// console.log(Person.prototype.toString());

Person.prototype.talk = function () {
    return 'new and improved talking';
}
console.log(you.talk());


function Person1 () {
    this.age=12;
}
const me2= new Person1();
Person1.age=45;

class Person2{
    talk () {
        return 'talking';
    }
}

class Person3 extends Person2 {
    fly () {
        return 'flying';
    }
}

const us = new Person3();
console.log(us.talk());
console.log(us.fly());

//inheriting from the Pure object
const obj= {
    name : 'shashwat',
    age : 21
}
const boy = Object.create(obj);
console.log(boy.age,boy.name);

//setting the prototype 
const obj1 = {
    name : "raj aryan",
    age : 27
}
const girl = {}; //empty object
Object.setPrototypeOf(girl,obj1);
console.log(girl.age,girl.name);


