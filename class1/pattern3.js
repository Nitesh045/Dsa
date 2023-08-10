let s ='';
let n =5;
for(let i = 1;i<=n;i++){
    let spaces = n-i;
    let stars =i;
    while(spaces>0){
        s+=' ';
        spaces--;

    }
    while(stars>0){
        s+='*';
        stars--;
    }
    s+='\n'
}
console.log(s);