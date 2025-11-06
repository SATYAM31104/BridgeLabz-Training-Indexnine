// index.js

// const fsPromises = require('fs').promises;
// const path = require('path');


// const fileOps = async () => {
//     try{
//         const data = await fsPromises.readFile(path.join(__dirname, 'lorem.txt'), 'utf8');
//         console.log(data);
//         await fsPromises.unlink(path.join(__dirname, 'lorem.txt'),data);
//         await fsPromises.writeFile(path.join(__dirname, 'newfile.txt'),data);
//         await fsPromises.appendFile(path.join(__dirname, 'newfile.txt'),"\n\nNice to meet you");
//         await fsPromises.rename(path.join(__dirname, 'newfile.txt'),"newName.txt");

//         const newData = await fsPromises.readFile(path.join(__dirname, 'newName.txt'), 'utf8');
//         console.log(newData);

//     }
//     catch(error){
//         console.error(error);
//     }
// }
// fileOps();
// Write file
// fs.writeFile(path.join(__dirname, 'reply.txt'), 'I am Shashwat and I am doing good', (err) => {
//     if (err) {
//         throw err;
//     } else {
//         console.log('File written successfully');
//     }

//     // Append to another file
//     fs.appendFile(path.join(__dirname, 'append.txt'), '\n\nYou are doing well too?', (err) => {
//         if (err) {
//             throw err;
//         } else {
//             console.log('File appended successfully');
//         }

//         // Rename that file
//         fs.rename(
//             path.join(__dirname, 'append.txt'),
//             path.join(__dirname, 'wow.txt'),
//             (err) => {
//                 if (err) {
//                     throw err;
//                 } else {
//                     console.log('Renamed successfully');
//                 }
//             }
//         );
//     });
// });

// console.log("shashwat");


// Exit gracefully on uncaught errors
// process.on('uncaughtException', (err) => {
//     console.error(`There was an error: ${err}`);
//     process.exit(1);
// });

const fs = require('fs');
const os = require('os');

console.log(os.cpus().length);

//blocking 
// const result = fs.readFileSync('./new-lorem.txt','utf8');
// console.log(result);
// console.log('This is after the blocking call');
//writing
fs.writeFileSync('shashwat.txt',"Hello this is blocking synchronous file");
console.log("File written successfully");
//reading
console.log("Reading the blocking file");
const data=fs.readFileSync('shashwat.txt','utf8');
console.log("File read successfully",data);

//appending
const data1=fs.appendFileSync('shashwat.txt',"iam appending this line inside the file");
console.log("File appended successfully",data1);   

//delete
fs.unlinkSync('shashwat.txt');
console.log("File deleted successfully");




//non blocking
// console.log("this is before the non blocking");

//  fs.readFile('./new-lorem.txt','utf8',(err,data)=>{
//     console.log(data);
//  });
console.log('This is after the blocking call');

//writing
fs.writeFile('nonblocking.txt',"Hello this is the non blocking one",(err) =>{
   if(err) throw err;
   console.log("Non blocking file write successful");
})

//reading
 fs.readFile('nonblocking.txt','utf8',(err,data)=>{
   if(err) throw err;
    console.log(data);
 });

 //appending
 fs.appendFile('nonblocking.txt',"This is i am appending the non blocking file",(err)=>{
   if(err) throw err;
   console.log("I have appended the inside the non blocking file perfectly");
 })

 //deleting
 fs.unlink('nonblocking.txt',(err) =>{
   if(err) throw err;
   console.log("Non blocking file deleted successfully");
 })