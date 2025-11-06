// const http = require("http");

// const server = http.createServer((req,res)=>{
//     console.log("request URl",req.url);
//     console.log("request Method",req.method);
//     console.log("request Headers",req.headers);

//     res.end("the request is recieved perfectly");
// });

// server.listen(3000,()=>{
//     console.log("the server is running on port 3000");
// })

const http = require("http");
// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'text/plain'});
//     res.write("Hello this is the response from the server");
//     res.end();
// });

// server.listen(3000,()=>{
//     console.log("server is listening on the port 3000");
// })

const fs = require('fs');
const myserver = http.createServer((req,res)=>{
    const log = `${ Date.now()} : ${req.method} : ${req.url} new requests have beend recieved`;
   fs.appendFile('requests.txt', log + '\n',(err)=>{
        if(err) throw err;
        res.end("the request has been logged");
    })
})

myserver.listen(4000,()=>{
    console.log("the app is running on the port 4000");
})