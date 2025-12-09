console.log("what does it mean to be strong");
{
    const a =5;
    console.log(a); 
}

//only var is possible to recdlare in the same scope
//let can be initialized with nothing and can be var but for const we need to initialize 
//var doesnt have a block scope it has a function scope 

// const b=4;
// b=5; // we cant reinitialize the const

// function abc(){
//     console.log(a,b,c);

//     const c=30;
//     let b=20;
//     var a=10;

// }
// abc();

//map filter reduce 
//map{returns a new array and takes a callback function}
const nums =[1,2,3,4,5];
const multi= nums.map((val,i,nums)=>{
    return val*3; 
})

console.log(multi);

//filter[returns only those elements that fulfill the criteria] and this also takes callback function and aslo returns a new array
const morethantwo=nums.filter((val,i,nums)=>{
    return val > 2;
});
console.log(morethantwo);

//reduce same thing like other 2
const sum=nums.reduce((acc,curr,i,nums)=>{ //acc ko we can take it as running sum and Curr is the current value 
    return acc + curr;
},0); //here the 0 is the initial value
console.log(sum);

//study for the polyfills 


//map vs foreach
const arr=[2,4,6,7,8];

const mapresult=arr.map((ar)=>{
    return ar + 2;
}).filter((val)=>{
    return val > 6;
})

const forEachresult=arr.forEach((ar,i)=>{
    arr[i]= ar + 2;
});

console.log(mapresult);
console.log(frameElement,arr);

let students = [
    { name: "Piyush", rollNumber: 31, marks: 80 },
    { name: "Jenny", rollNumber: 15, marks: 69 },
    { name: "Kaushal", rollNumber: 16, marks: 35 },
    { name: "Dilpreet", rollNumber: 7, marks: 55 },
    ];

    // const capital=students.map((val)=>{
    //     return val.name.toUpperCase();
    // })
    // console.log(capital);

    const marks = students.filter((val)=>{
        return val.marks > 60 && val.rollNumber > 15;
    })
    console.log(marks);

    const wow=students.reduce((acc,curr)=>{
        return acc + curr.marks;
    },0)

    console.log(wow);

    const names = students.filter((val)=>{
        return val.marks > 60;
    }).map((value)=>{
        return value.name;
    })

    console.log(names);

    //IIFE immedialty invoked function expressions 
    (function square(num){
        console.log(num * num);
    })(8); 
    // square(5);
    document.addEventListener("click",()=>{
        console.log("clicked");
    })

    // /study about the execution context and call stack

    //closures

    //prototypal and prototype inheritance 
    let object = {
        name: "Akshay",
        city: "Dehradun",
        getIntro: function () {
          console.log(this.name + " from " + this.city);
        }
      };
      
      let object2 = {
        name: "Aditya",
      };
      
      // ⚠️ Never do this (just showing for example)
      object2.__proto__ = object;
      
      // Now you can call:
      object2.getIntro(); // ✅ "Aditya from Dehradun"

      const parent = {
        name : 'Homo phobic',
        breathe : ()=>{
            console.log("breathing");
        }
      }
      parent.newProperty='new';

      const child=Object.create(parent);
      console.log(child);

      const child2= Object.create(child);
      child2.size='8 inches';

      class Human {
        talk() {
            return 'talking';
        }
      }

      class SuperHuman extends Human {
         fly () {
            return 'Flying';
         }
      }
      const shashwat = new SuperHuman();
      shashwat.fly(); 

      function Shashwat (name) { 
        this.name=name;
      }


      //Currying
    //   function multiply(x,y,z){
    //     return x * y * z;
    //   }
    //   multiply(2,3,5);

    function multiply(x){
        return function(y){
            return function(z){
                return x*y*z;
            }
        }
    };
    console.log (multiply(3)(3)(3));