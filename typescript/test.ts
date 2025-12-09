var a = 12;
function abcd(){
    return 12
}
const name = "shashwat"

// datatypes
// {} () []  reference type datatype
// if not then they are primitive type  and we can directly copy the primitive dataypes
// primitive datatypes are immutable
// reference datatypes are mutable

// let b = 69;
// b = "shashwat"

//arrays
let arr = [1,2,3,4,5,6,7,"shashwat",{name: "shashwat"}];

//tuples
let arr1: [string,number] = ["shashwat" , 21]; //vice versa will be error

//enum
enum Role {
    ADMIN = "ADMIN",
    USER = "USER",
    MANAGER = "MANAGER",
    SUPERADMIN = "SUPERADMIN"
}

console.log(Role.ADMIN);

//any , unknown , void , never
let x : number ;
x = 12;
let c ; // any set hoga 

let s : unknown;
s = 12;
s = "shashwat";

// if the type is any then aaisa maanlo normal JS pe kaam kar rahe ho

function abcde () : number{
    return 12;
}

function xyz () : string{
    return "shaswat";
}

function some () : void{  // kya return kar raha hai woh batana hota hai
    return ;
}
function returnsomethin() : void {
    return;
}

let Q : string | number;
Q= "Shashwat";
Q = 21;