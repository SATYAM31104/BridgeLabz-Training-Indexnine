const map = new Map();
map.set("name" , "shashwat");
console.log(map);
map.delete("name");
console.log(map);
console.log(map.has("sex"));
map.set("sex","Female");
console.log(map.has("sex"));

map.forEach((value,key)=>{
    console.log(key, value);
})

const arr= [12,2,12,123,123,1212,124,434,461,21,12]
const set = new Set();
for(let i=0; i<arr.length; i++){
    set.add(arr[i]);
}
console.log(set);
