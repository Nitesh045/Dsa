let arr = [5,2,-10,3,4,2,-1,5,5,-4,5,-4,-7,2];

 let n = arr.length;

// let csum=0;
// let maxSumSubarry=0;
// for(let i =0;i<n;i++){
//     let prevTrain =csum +arr[i];
//     let newtrain=arr[i];
//     csum=Math.max(prevTrain,newtrain);
//     maxSumSubarry=Math.max(maxSumSubarry,csum)
// }
// console.log(maxSumSubarry);
let sp=0,ep=0;
let msp=0,mep=0;
let maxSum=0;
let csum=0;
for(let i=0;i<n;i++){
    if(csum<0){
      sp=i;
      csum=arr[i];
    }else{
        csum+=arr[i];
    }
    if(csum>maxSum){
        maxSum=csum;
        msp=sp;
        mep=i;
    }
}



let s="";
for(let i =msp;i<=mep;i++){
    s+=" "+arr[i];
}
console.log(s);