let arr=[1,2,3,4,3,2,1];
arr=arr.sort();
for(let i =0;i<arr.length;i++){
    if(arr[i]!==arr[i+1] && arr[i]!==arr[i-1]){
        console.log(arr[i])
    }
}