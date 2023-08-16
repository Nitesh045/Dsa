let arr=[1,3,-1,-3,5,3,6,7];
let k=3;
let ans=[];
let curr=[];
for(let i=0;i<arr.length;i++){
    while(curr.length>0 && curr[0]<i-k+1){
        curr.shift()
        
    }
    while(curr.length>0 && arr[curr[curr.length-1]]< arr[i]){
        curr.pop();
        
    }
    curr.push(i)
    if(i>=k-1){
        ans.push(arr[curr[0]])
    }
}
console.log(ans)
