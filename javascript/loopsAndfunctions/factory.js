
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

function createPerson(name){
    return obj = { //returns an obj
        name : name,
        talk(){
            return `hi how are you ${this.name}`;
        }
    }
}

 const ME = createPerson("shashwat");
 console.log(ME.talk());
 
ME.talk = function() {
    return `this is a war ${this.name}`;
};
 console.log(ME.talk());
 const YOU = createPerson("Aarna");
 console.log(YOU.talk());
