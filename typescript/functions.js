"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function abcd() {
    return "hey";
}
abcd();
function xyz(name, cb) {
    cb(name);
    return name;
}
xyz("shashwat", (value) => {
    console.log(value);
});
function abcdef(name, age, cb) {
    cb("hey");
}
abcdef("Shashwat", 21, (arg) => {
    console.log("abcd");
});
//# sourceMappingURL=functions.js.map