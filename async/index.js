

console.log("starting the operation");

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
console.log("operation is done now do something else");c 