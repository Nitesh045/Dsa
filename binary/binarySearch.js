let arr=[10,20,50,30,40,60,70,80,90];
arr.sort();
console.log(arr);

function binarySearch(arr,tar){
    let l=0;
    let r=arr.length-1;
    
    while(l<=r){
        let mid = parseInt((l+r)/2);
        if(arr[mid]==tar){
            return mid;
        }else if(arr[mid]<tar){
            l=mid+1
        }else{
            r=mid-1;
        }
    }
    return -1
}
console.log(binarySearch(arr,40));