
// ALWAYS REMEMBER THAT FACTORY FUNCTIONS ALWWAYS RERUN US OBJECTS

function personFactory(name) {
    return Object.freeze({
        name: name,
        talk() {
            return `I am ${name}`;
        }
    });
}

const me = personFactory("Shashwat");
console.log(me.talk());

const aarna = personFactory("Aarna");
console.log(aarna.talk());

 