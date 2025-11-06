const http = require("http");

const server = http.createServer((req,res)=>{
    res.write('Hello this is the node js server created');
    res.end();
});

server.listen(3000,()=>{
    console.log("Server is listening on port 3000");
})