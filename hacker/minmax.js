let arr=[1,2,3,4,5]
function miniMaxSum(arr) {
    let n= arr.length;
    console.log(n-2)

    let minsum=0;
    let maxsum=0;
    for(let i=0;i<n;i++){
        if(i<=n-2){
            minsum+=arr[i]
        }
        if(i>0){
            maxsum+=arr[i]
        }
    }
    console.log(minsum,maxsum)

}
miniMaxSum(arr)