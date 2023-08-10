let a= [1,2,3,4,5];
let b =[9,8,4,2];
console.log('a');
let ans = [];
let carry =0;
function reverse(arr,sp,ep){
    let i = sp;
    let j = ep;
    while(i<j){
        let temp = arr[i];
        arr[i]=arr[j];
        arr[j]=temp
        i++,i--
    }
}
a=reverse(a,0,a.length-1);
console.log(a);
b = reverse(b,0,b.length-1);
let i =0;
while(i<a.length || i <b.length || carry>0){
    let x=0;
    let y = 0;
    if(i<a.length) x=a[i];
    if(i<b.length) y=b[i];
    let sum = x+y+carry;
    carry=Math.floor(sum/10);
    
    sum=sum%10;
    ans.push(sum)
    i++;
}
ans=reverse(ans,0,ans.length-1);
console.log(ans);