const fs = require("fs");
const path = require("path");
const rs = fs.createReadStream(path.join(__dirname,"newName.txt"),{encoding:"utf8"});
const ws = fs.createWriteStream(path.join(__dirname,"new-lorem.txt"));

// rs.on("data",(chunk)=>{
//     console.log("----New Chunk----");
//     console.log(chunk);
//     ws.write(chunk);
// });

// rs.on("error",(err)=>{
//     console.error(`There was an error: ${err}`);
// });

rs.pipe(ws);