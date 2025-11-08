const enrolled = ["Alice", "Bob", "Charlie", "David"];
const attended = ["Charlie", "David", "Eve"];


const common = enrolled.filter(student => attended.includes(student));

console.log(common);