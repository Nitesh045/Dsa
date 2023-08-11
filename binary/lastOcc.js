let arr= [10,20,30,40,45,45,45,50,50,50,50,80,90];
arr.sort(function(a,b){return a-b});

function lastOccu(arr,tar){
    let l=0;
    let r = arr.length-1
    let temp=-1;
    while(l<=r){
        let mid=Math.floor((l+r)/2);
        if(arr[mid]<=tar){
            if(arr[mid]==tar) temp=mid;
            l=mid+1;
        }else r=mid-1
    }
    return temp
}
console.log(lastOccu(arr,80))