let arr=[1,2,3,4,5,6];
let s='';
let maxNumber=0;
for(let i=0;i<=arr.length;i++){
    if(arr[i]>maxNumber){
        maxNumber=arr[i]
    };

}
// console.log(maxNumber);
for(let i=maxNumber;i>=1;i--){
    for(let j=0;j<=arr.length;j++){
       if(arr[j]>=i){
        s+='*'
       }else{
        s+=' '
       }
       
    }
    s+="\n"
}
console.log(s)