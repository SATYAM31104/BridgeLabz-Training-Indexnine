const binary = (arr,target)=>{
    let start=0;
    let end=arr.length-1;
    while(start <= end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid] == target){
            return mid;
        }
        else if(arr[mid] < target){
            start = mid+1;
        }
        else{
            end = mid-1;
        }
    }
}
const arr = [1,3,5,7,8,0,12,43];
let target = 4;
console.log(binary(arr,target));