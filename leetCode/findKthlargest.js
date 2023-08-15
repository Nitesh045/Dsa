let arr=[3,2,1,5,6,4];
let k=2;
let findKthLargest=(arr,k)=>{
    arr.sort((a,b)=>a-b)
    console.log(arr);
    console.log(arr[(arr.length-1)-(k-1)])
}
findKthLargest(arr,k);