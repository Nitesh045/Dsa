let arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
let n = arr.length;
let c=arr[0].length;
let first=0;
let second=0;
for(let i=0;i<n;i++){
    for(j=0;j<n;j++){
        if(i -j==0){
            let sum=arr[i][j];
            first+=sum;

        }
        if(i+j==c-1){
        
            console.log(arr[i][j]);
        }
    }
    
   
}
console.log(first);
