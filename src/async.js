// function getData(){
//     return new Promise ((resolve,reject)=>{
//         setTimeout (()=>{
//             resolve("Data received successfully");
//         },1000)
//     })
// }

// async function start(){
//     const result = await fetch('https://jsonplaceholder.typicode.com/users/1');
//     const data = await result.json();
//     console.log(data);
// }

// console.log(start());

// async function start2(){
//    getData().then((result)=>{
//     console.log(result);
//    })
// }


// 1. async and await must be used together
// Exceptions: JS Modules & Chrome DevTools Console
// 2.async/await only affects Promise receiver
// 3. You can await any function that returns a Promise
// 4. Any function can be converted to async
// 5. async function always returns a Promise
// 6. await can only be used inside async functions
// 7. error handling with try/catch
// const me = {
// async sayHello() {
// const result = await callSomeAPI()
// return `I am Qoli`
// }
// }
// //Promise { `I am Qoli` }
// me.sayHello()



function wrongData () {
    return new Promise((resolve,reject)=>{
        reject("Something went wrong");
    })
}

async function Start(){
    try{
        const result = await wrongData();
        const data = await result.json();
        console.log(data);
    }catch(error){
        console.error(error);
    }
    
}

Start()