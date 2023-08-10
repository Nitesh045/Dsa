let n = 623456691;
let d=6;
let count=0;
while(n>0){
    let lastDigit=n%10;
    if(lastDigit==d){
        count+=1;
    }
    n=Math.floor(n/10)
}
console.log(count);