let digit=321;

function count(digit){
    let num=Math.abs(digit);
    let count=0;
    do{
        count++;
        num=Math.floor(num/10);
    }
    while(num > 0);
    return count;
}
console.log(count(121));