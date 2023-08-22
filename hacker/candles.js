let arr=[3 ,2 ,1 ,3];
arr.sort((a,b)=>a-b)
function Candles(arr){
    let max=0;
    let count =0;
    for(let i =0;i<arr.length;i++){
        
        if(arr[i]>count){
            count=arr[i]
        };  
    }
   for(let i =0;i<arr.length;i++){
    if(arr[i]==count) max++
   }
   return max;
}
console.log(Candles(arr));
