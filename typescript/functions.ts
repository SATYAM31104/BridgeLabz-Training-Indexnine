function abcd(): string {
    return "hey";
} 
abcd();

function xyz(name: string, cb: (value: string) => void): string {
    cb(name);
    return name;
}

xyz("shashwat", (value: string) => {
    console.log(value);
});

function abcdef(name : string , age : number , cb :(arg : string)=>void){
    cb("hey");
}

abcdef("Shashwat" , 21, (arg : string)=>{
    console.log("abcd")
})