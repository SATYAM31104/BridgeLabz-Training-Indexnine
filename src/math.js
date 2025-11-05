exports. add = (a,b) => {
    return a + b;
}
exports. subtract = (a,b) => {
    return a - b;
}
exports. multiply = (a,b) => {
    return a * b;
}
exports. divide = (a,b) => {
    if (b === 0) throw new Error('Division by zero');
    return a / b;
}
// module.exports ={add,subtract,multiply,divide};