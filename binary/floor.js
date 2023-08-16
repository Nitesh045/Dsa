let arr= [10,20,30,40,50,60,70,80,90];

function floorValue(arr,tar){
    let floor=-1;
    let l=0;
    let r=arr.length;
    while(l<=r){
        let mid= parseInt((l+r)/2);
        if(arr[mid]<tar){
            floor=arr[mid]
            l=mid+1

        }else{   
            r=mid-1;
            
        }
        
    }
    return floor;
    
}
console.log(floorValue(arr,50));