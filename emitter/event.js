const EventEmitter = require('events'); //here EventEmitter is a class
const emitter = new EventEmitter(); //creating an object of EventEmitter class

//register a listener
emitter.on('started', (number) => {
    console.log(`the event has started with ${number}`);
})

emitter.emit('started',45);

// using multiple argumnets

emitter.on('dataRecevied',(number,name,age)=>{
    console.log(`The name has been recieved at number ${number} with ${age} age and name is ${name}`);
})
emitter.emit('dataRecevied',1,'john',25);


// creating another emitter
const newEmitter = new EventEmitter();
newEmitter.on('greet',(name)=>{
    console.log(`Hello ${name}, welcome aboard!`);
})
newEmitter.emit('greet','Alice');
newEmitter.emit('greet','shashwat');

newEmitter.once('greet',(name)=>{
    console.log(`Hello ${name}, welcome aboard!`);
});
newEmitter.emit('greet','Alice');
newEmitter.emit('greet','shashwat'); // this will not work as once works only one time

const oldEmitter = new EventEmitter();
oldEmitter.on('login',(username,email)=>{
    console.log(`User ${username} with email ${email} has logged in.`);
})
oldEmitter.emit('login','shashwat','shashwat@example.com');

//remove a listner 
const removeEmitter= new EventEmitter();

function logMessage(message){
    console.log(`Log: ${message}`);
}

removeEmitter.on('logEvent',logMessage);
removeEmitter.emit('logEvent',"this is a log message");

removeEmitter.removeListener('logEvent',logMessage);

removeEmitter.emit('logEvent',"This wont be logged"); // this will not work as the listener has been removed


//remove the all listners
newEmitter.removeAllListeners('greet');
newEmitter.emit('greet',"Shashwat Srivsatava")


// using fuction 
const funEmitters = new EventEmitter();
function greet(){
    console.log("GREETINGS!");
}
function welcome(){
    console.log("WELCOME!");
}

funEmitters.on('start',greet);
funEmitters.on('end',welcome);

funEmitters.emit('start');
funEmitters.emit('end');
//<-// end of the file//->//