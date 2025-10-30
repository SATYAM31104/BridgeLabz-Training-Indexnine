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
 