const url = require("url");
const path = require('path');
const http = require('http');

 console.log(path.basename(__filename));
 console.log(path.basename(__dirname));
 
 console.log(path.extname(__filename));
 console.log(path.extname(__dirname));

 console.log(path.parse(__filename));

const myServer = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end("This is the home page");
    }
    else{
        res.end("SOrry");
    }
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
 })

 myServer.listen(3000, ()=> console.log("Server is running on port 3000"));