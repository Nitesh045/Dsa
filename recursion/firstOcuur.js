
//let tar = 4;
 //let idx = 0;
function firstOccur(arr,idx,tar){
    if(arr[idx] ==tar) return idx;
    let ans = firstOccur(arr,idx+1,tar);
    return ans;
}
let arr = [1,2,3,4,5,6,7,3,5,4];
console.log(firstOccur(arr,0,4));
