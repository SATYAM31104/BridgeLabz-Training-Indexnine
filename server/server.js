const http = require("http");

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end("welcome to the home page");
    }
    else if(req.url === '/about'){
        res.end("This is the about page");
    }
    else{
        res.writeHead(404,{'content-type':'text/plain'});
        res.end("404 page not found");
    }
});


server.listen(3000,()=>{
    console.log("server is running at 3000")
})