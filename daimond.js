let n = 5;
let s = "";
let star = 1;
let spaces = Math.floor(n/2);
for(let i = 0; i <=n;i++){
    for(let j = 1; j<=spaces;j++){
        s+=" ";
    }
    for(let i = 1;i <=star;i++){
        s+="*";
    }
    s+=" \n";
    if(i < Math.floor(n/2)){
        star+=2;
        spaces--;

    }else{
        star -=2;
        spaces++
    }
}
console.log(s);