let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "cherry", "date"];

console.log("Original numbers array:", numbers);
console.log("Original fruits array:", fruits);

numbers.push(6, 7);
console.log("After push:", numbers);

numbers.pop();
console.log("After pop:", numbers);

numbers.unshift(0);
console.log("After unshift:", numbers);

numbers.shift();
console.log("After shift:", numbers);

numbers.reverse();
console.log("After reverse:", numbers);

fruits.sort();
console.log("After sort:", fruits);

fruits.splice(1, 1, "blueberry", "blackberry");
console.log("After splice:", fruits);

let filledArray = new Array(5).fill(0);
console.log("Filled array:", filledArray);

let copyArr = [1, 2, 3, 4, 5];
copyArr.copyWithin(0, 3, 5);
console.log("After copyWithin:", copyArr);

let sliced = numbers.slice(1, 4);
console.log("Sliced array:", sliced);

let combined = numbers.concat([8, 9], [10]);
console.log("Concatenated array:", combined);

console.log("Joined array:", fruits.join(", "));
console.log("Does fruits include 'apple'? :", fruits.includes("apple"));
console.log("Index of 'cherry':", fruits.indexOf("cherry"));
console.log("Last index of 'apple':", fruits.lastIndexOf("apple"));

console.log("Using forEach:");
numbers.forEach((num, index) => console.log(`Index ${index}: ${num}`));

let squared = numbers.map(num => num * num);
console.log("Squared numbers:", squared);

let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of numbers:", sum);

let product = numbers.reduceRight((acc, curr) => acc * curr, 1);
console.log("Product of numbers (reduceRight):", product);

console.log("All numbers > 0?", numbers.every(num => num > 0));
console.log("Some numbers > 4?", numbers.some(num => num > 4));
console.log("First number > 2:", numbers.find(num => num > 2));
console.log("Index of first number > 2:", numbers.findIndex(num => num > 2));

let nested = [1, [2, [3, 4]], 5];
console.log("Flattened array:", nested.flat(2));

let flatMapped = [1, 2, 3].flatMap(x => [x, x * 2]);
console.log("FlatMap example:", flatMapped);

let str = "hello";
console.log("Array from string:", Array.from(str));
console.log("Is numbers an array?", Array.isArray(numbers));

let arrOf = Array.of(10, 20, 30);
console.log("Array.of result:", arrOf);
