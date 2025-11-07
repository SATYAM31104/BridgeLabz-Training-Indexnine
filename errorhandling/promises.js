const fs =require('fs').promises;

//using async await and promises

async function readFileAsync(){
    try{
        const data = await fs.readFile('nonext.txt','utf-8');
        console.log(data);
    }
    catch(error){
        console.log("the file does not exist in async await");
    }
}
readFileAsync();

function add(a,b){
    if(b === 0){
        throw new Error("b can not be zero");
    }
    return a + b;
}

try{
    console.log(add(5,0));
}catch(err){
    console.log("Error caught: " + err.message);
}
