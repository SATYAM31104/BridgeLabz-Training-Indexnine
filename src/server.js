const os = require('os');
const path = require('path');
const {add,subtract,multiply,divide} = require('./math');
console.log(add(2, 3));
console.log(multiply(2, 3));
console.log(subtract(2, 3));
console.log(divide(2, 3));

// // Using os module
// console.log('OS Type:', os.type());
// console.log('OS Platform:', os.platform());
// console.log('OS Version:', os.version());
// console.log('Home Directory:', os.homedir());

// // Using path module
// console.log('Directory Name:', path.dirname(__filename));
// console.log('Base Name:', path.basename(__filename));
// console.log('Extension Name:', path.extname(__filename));
// console.log('Parsed Path:', path.parse(__filename));