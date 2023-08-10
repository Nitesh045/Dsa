let arr=[10,20,30,40,50,60,70,80,90];

function celingNub(arr,tar){
    let r=arr.length-1;
    let l=0;
    let ceilingNum=-1;
    while(l<=r){
        let mid = parseInt((l+r)/2);
        if(arr[mid] >tar){
            ceilingNum=mid;
            r=mid-1;
        }else{
             l=mid+1;
        }
        
    }
    console.log(ceilingNum);

}
celingNub(arr,50)
