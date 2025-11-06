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
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'});
    res.write("Hello this is the response from the server");
    res.end();
});

server.listen(3000,()=>{
    console.log("server is listening on the port 3000");
})