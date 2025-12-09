function Person (name) {
    this.name = name;
    this.talk = () => {
        return `hello i am ${this.name}`;
    }
}

const shashwat = new Person("sahshawt"); // when we use new it create an empty object inside the function and calls it temp and sets the prototype of this object to Person.prototype so that it can access all the propertirs of the person class
//  and then also returns this but we cant see it 
console.log(shashwat);
const sina = new Person("sinaRest");
const ben = new Person("ben");
const sam = new Person("sam");
console.log(ben.talk());
 
class Check{
    constructor(name){
        this.name = name;
    }
    greet () {
        return `what are you doing ${this.name}`;
    }
}

const OBJ = new Check("shashwat");
console.log(OBJ.greet());

const naming= new Person("shashwat");
console.log(naming.name);

//normal function 
// function person (name){
//     return {
//         name : name,
//         age : 12 ,
//         wow(){
//             return `is it true ${this.name}`;
//         }
//     }
// }
// const x = person("shashwat");
// console.log(x.name);
// console.log(x.age);
// console.log(x.wow());

//constructor function
// function person(name,age){
//     this.name = name ,
//     this.age = age,
//     this.wow = () =>{
//         return `is this true ${this.name}`;
//     }
// }
// //here we have to create and instance using the new Keyword
// const x = new person("shashwat",21);
// console.log(x.name);
// console.log(x.age);
// console.log(x.wow());

//using class and calling 
class person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    wow(){
        return `is this true ${this.name}`;
    }
}
const x = new person("shashwat",21);
console.log(x.name);
console.log(x.age);
console.log(x.wow());
