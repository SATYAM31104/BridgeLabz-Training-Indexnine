"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a = 12;
function abcd() {
    return 12;
}
const name = "shashwat";
// datatypes
// {} () []  reference type datatype
// if not then they are primitive type  and we can directly copy the primitive dataypes
// primitive datatypes are immutable
// reference datatypes are mutable
// let b = 69;
// b = "shashwat"
//arrays
let arr = [1, 2, 3, 4, 5, 6, 7, "shashwat", { name: "shashwat" }];
//tuples
let arr1 = ["shashwat", 21]; //vice versa will be error
//enum
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["USER"] = "USER";
    Role["MANAGER"] = "MANAGER";
    Role["SUPERADMIN"] = "SUPERADMIN";
})(Role || (Role = {}));
console.log(Role.ADMIN);
//any , unknown , void , never
let x;
x = 12;
let c; // any set hoga 
let s;
s = 12;
s = "shashwat";
// if the type is any then aaisa maanlo normal JS pe kaam kar rahe ho
function abcde() {
    return 12;
}
function xyz() {
    return "shaswat";
}
function some() {
    return;
}
function returnsomethin() {
    return;
}
let Q;
Q = "Shashwat";
Q = 21;
//# sourceMappingURL=test.js.map