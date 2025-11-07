const fs = require('fs');
//blocking
try{
    const data = fs.readFileSync('nonext.txt','utf-8');
    console.log(data);
}catch(error){
    console.log("the file does not exist");
}
// non blocking 
fs.readFile('nonext.txt','utf-8',(err, data)=>{

    if(err){
        console.log("the file does not exist inside non blocking code");
        return;
    }
    console.log(data);
});