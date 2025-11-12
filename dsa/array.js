
function check(data,name){
    for(let i=0;i<data.length;i++){
        if(data[i]===name){
            return true;
        }
    }
    return false;
}

let data = ["shashwat", "ram", "raj", "karti", "raja"];
console.log(check(data,"shashwat"));
console.log(check(data,"hello")); 

