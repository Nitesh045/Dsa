let n = 7;
let s='';
let stars=1;
let spaces=Math.floor(n/2);
for(let i =1;i<=n;i++){
    for(let j =1;j<=spaces;j++){
        s+=' '
    };
    for(let i=1;i<=stars;i++){
        s+='*'
    }
    if(i<=Math.floor(n/2)){
        stars+=2;
        spaces--
    }else{
        stars-=2;
        spaces++
    }
    s+='\n'
}
console.log(s);