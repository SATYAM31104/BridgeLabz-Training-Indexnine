let arr = [10,20,30,40,50,60];
let newEl=100;
let pos=3;

// for(let i = arr.length-1;i>=0;i--){
//     if(i >= pos){
//         arr[i+1]=arr[i];
//         if(i === pos){
//             arr[i]=newEl;
//         }
//     }
// }
// for(let i=0 ;i<arr.length;i++){
// console.log(arr[i]);
// }

//remove 40 from array at pos 

// let posToRemove=2;
// for(let i=posToRemove;i<arr.length-1;i++){
//     arr[i]=arr[i+1];
// }
// arr.length=arr.length-1;
// console.log(arr);


//slice 
let arr1=[1, 2, 3, 4, 5]
let sliced = arr1.slice(2);
let spliced = arr1.splice(2,1,54);
// console.log(sliced);
console.log(arr1);