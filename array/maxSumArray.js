let arr=[5,2,-10,3,4,-1,5,5,-4,-7,2];

let n =arr.length;
let maxSumSubArray=0;
let maxSumSubArraySp=0;
let maxSumSubArrayEp=0;

for(let sp=0;sp<n;sp++){
    for(let ep=sp;ep<n;ep++){
        let curruntSumSubArray=0;
        for(let i=sp;i<=ep;i++){
            curruntSumSubArray+=arr[i];
            if(curruntSumSubArray>maxSumSubArray){
                maxSumSubArray=curruntSumSubArray;
                maxSumSubArraySp=sp;
                maxSumSubArrayEp=ep;
            }
        }
    }
}
let s="";
console.log(maxSumSubArray);
for(let i =maxSumSubArraySp;i<=maxSumSubArrayEp;i++){
    s+=arr[i]+" ";
}
console.log(s);