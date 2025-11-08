const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // fs.readFile('streams.txt', (err, data) => {
        //     if (err) {
        //         res.writeHead(500, {'Content-Type': 'text/plain'});
        //         res.end('Error reading file');
        //         return;
        //     }
        //     res.writeHead(200, {'Content-Type': 'text/plain'});
        //     res.end(data);
        // });
        const stream = fs.createReadStream('streams.txt',"utf-8");
        res.writeHead(200, {'Content-Type': 'text/plain'});
        stream.on('data',(chunk)=>{
            res.write(chunk);
        });
        stream.on('end',()=>{
            res.end();
        });
        stream.on('error',(err)=>{
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Error reading file');
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 Not Found');
    }
});
server.listen(3000, () => {
    console.log('Server running on port 3000');
});


console.log(process.argv);