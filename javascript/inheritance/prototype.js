const dude = {};
console.log(dude.toString());
dude.name = "shashwat";
dude.age = "21";
console.log(dude);

const Human = {
    kind : 'human'
}
const sina = Object.create(Human);
sina.age=21;
const ben = Object.create(sina);
ben.age = 24;

//prototype in constructor functions 
function Dude (name){
    this.name = name;
}
const me = new Dude('shashwat');
console.log(me);
