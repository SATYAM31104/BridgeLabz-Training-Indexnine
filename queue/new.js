function check(arr, target, n) {
    arr.sort((a, b) => a - b);
    let mini = Number.MAX_SAFE_INTEGER;
    let start = 0;
    let end = arr.length - 1;
    let seat = 0;
    
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let diff = Math.abs(arr[mid] - target);
        let diff1 = Math.abs(arr[mid - 1] - target);
        let diff2 = Math.abs(arr[mid + 1] - target);

        if (diff < mini) {
            mini = diff;
            seat = arr[mid];
        }
        if (diff1 < mini) {
            mini = diff1;
            seat = arr[mid - 1];
        }
        if (diff2 < mini) {
            mini = diff2;
            seat = arr[mid + 1];
        }

        if (arr[mid] === target) {
            return arr[mid];
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return seat;
}

let arr = [5, 10, 20];
let n = arr.length;
let pref = 16;
let nearest = check(arr, pref, n);
console.log(nearest);