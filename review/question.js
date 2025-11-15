function check (arr,time){
    let start = 0;
    let end = arr.length - 1;
    let mini = Number.MAX_SAFE_INTEGER;
       let nearest = 0;

    while(start <= end){
        let mid = Math.floor((start + end) / 2);
        let diff = Math.abs(arr[mid] - time);
        let diff1 = Math.abs(arr[mid + 1] - time);
        let diff2 = Math.abs(arr[mid-1] - time);
        if(diff < mini){
            mini = diff;
            nearest = arr[mid];

        }
        if(diff1 < mini){
            mini = diff1;
            nearest = arr[mid + 1];
        }
        if(diff2 < mini){
            mini = diff2;
            nearest = arr[mid - 1];
        }
        if(arr[mid] == time){
            return arr[mid];
        }
        if(arr[mid] < time){
            start = mid + 1;
        }
        else{
            end = mid - 1;
        }
        
    }
    return nearest;

}



const arr = [100,200,300,450];
const time = 320;
let nearest = check(arr,time);
console.log(nearest);
