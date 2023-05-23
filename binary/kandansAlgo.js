let arr = [5,2,-10,3,4,2,-1,5,5,-4,5,-4,-7,2];

// let n = arr.length;

// let csum=0;
// let maxSumSubarry=0;
// for(let i =0;i<n;i++){
//     let prevTrain =csum +arr[i];
//     let newtrain=arr[i];
//     csum=Math.max(prevTrain,newtrain);
//     maxSumSubarry=Math.max(maxSumSubarry,csum)
// }
// console.log(maxSumSubarry);


let maxSumSubarry =0;
let maxSumSubSp=0;
let maxSumSubEp=0;
for(let sp=0;sp<arr.length;sp++){
    for(let ep=sp;ep<arr.length;ep++){
        let sumOfthisarry = 0;
        for(let i = sp; i<=ep;i++){
            sumOfthisarry+=arr[i];
            if(sumOfthisarry>maxSumSubarry){
                maxSumSubarry=sumOfthisarry;
                maxSumSubSp=sp;
                maxSumSubEp=ep;
            }
        }
    }
}

let s="";
for(let i =maxSumSubSp;i<=maxSumSubEp;i++){
    s+=" "+arr[i];
}
console.log(s);