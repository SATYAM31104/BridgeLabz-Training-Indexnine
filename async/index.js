

console.log("starting the operation");
const os = require("os");

function sleep(ms){
    let start = new Date().getTime();
    console.log("the operation is running...");
    // while(new Date().getTime() < start + ms){
    //     console.log("in progress...");
    // }
    setTimeout(()=>{
        console.log("operation is inside timeout")
    },ms);
    // console.log("operation is done");
}

sleep(1000);
console.log("operation is done now do something else");

// const promise = new Promise((resolve,reject)=>{
//     // if the promise is rejected  instatntly
//     throw Error;
//     console.log("Async task started");
//     if(false){
//         reject("something went wrong");
//     }
//     if(true){
//         resolve("task completed successfully");
//     }
// })

// promise.then((message)=>{
//     console.log("the promise is resolved");
// })
// promise.catch((error)=>{
//     console.log("the promise is rejected");
// })
// promise.finally(()=>{
//     console.log("the promise is settled");
// })

const promise =  Promise.resolve("solved");
promise.then((message)=>{
    console.log("the promise is resolved");
})
promise.then((message)=>{
    console.log("the promise is resolved 2nd time");
})
promise.catch((error)=>{
    console.log("the promise is rejected");
})

// //count the occurence of a word in a string
// const str = "hello world hello";
// const word = "hello";
// const count = str.split(word).length - 1;
// console.log(count);


console.log("Total Memory:", os.totalmem() / (1024 * 1024 * 1024), "GB");
console.log("Free Memory:", os.freemem() / (1024 * 1024 * 1024), "GB");