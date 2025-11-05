// index.js

const fsPromises = require('fs').promises;
const path = require('path');


const fileOps = async () => {
    try{
        const data = await fsPromises.readFile(path.join(__dirname, 'lorem.txt'), 'utf8');
        console.log(data);
        await fsPromises.unlink(path.join(__dirname, 'lorem.txt'),data);
        await fsPromises.writeFile(path.join(__dirname, 'newfile.txt'),data);
        await fsPromises.appendFile(path.join(__dirname, 'newfile.txt'),"\n\nNice to meet you");
        await fsPromises.rename(path.join(__dirname, 'newfile.txt'),"newName.txt");

        const newData = await fsPromises.readFile(path.join(__dirname, 'newName.txt'), 'utf8');
        console.log(newData);

    }
    catch(error){
        console.error(error);
    }
}
fileOps();
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
process.on('uncaughtException', (err) => {
    console.error(`There was an error: ${err}`);
    process.exit(1);
});