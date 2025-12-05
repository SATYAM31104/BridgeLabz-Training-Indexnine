const person = {
    name : 'shashwat',
    lname : 'srivastava',
    getName : function () { 
        console.log("Shashwat");
    }
}
function Person(name, lname, contact){
    this.name = name;
    this.lname = lname;
    this.contact = contact;

    this.getName = function(){
        console.log(this.name,this.lname);
    };
    this.getContact = function(){
        console.log(this.contact);
    }
}
// console.log(Person('shashwat','srivastava','8328832570'));
const person1 = new Person('shashwat', 'srivastava','8328832570');
const person2 = new Person('satyam', 'srivastava','18138137540');
console.log(person2.getName());
console.log(person2.getContact());
// console.log(person.name);