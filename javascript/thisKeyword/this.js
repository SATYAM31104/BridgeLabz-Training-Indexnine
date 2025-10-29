const person = {
    name: "John",
    age: 25,
    getName: function() {
        return this.name;
    },
    getAge: function() {
        return this.age;
    }
};

console.log(person.getName());
console.log(person.getAge());

function sayHello() {
    return "Hello " + this.name;
}

const user1 = { name: "Alice" };
const user2 = { name: "Bob" };

console.log(sayHello.call(user1));
console.log(sayHello.apply(user2));

const boundSayHello = sayHello.bind(user1);
console.log(boundSayHello());

function greet(greeting) {
    console.log(greeting + ", " + this.name);
}

const user = { name: "Alice" };

greet.call(user, "Hello");
greet.apply(user, ["Hi"]);

const boundGreet = greet.bind(user);
boundGreet("Hey");