const arr = [-2,-7,1000,5];
console.log(arr.sort((a,b)=>{
    return a-b; //ascending order
}))

console.log(arr.sort((a,b)=>{
   return b-a;
}))

let str = "shashwat";
console.log(str.split("").sort().join());