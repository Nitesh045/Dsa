let n = 4;
let s = "";
for(let i = 1;i <=n;i++){
    
    for(let j = 1;j <=n;j++){
       // s+=" *";
        if(i+j==n+1 || i-j==0){
            s+=" *";
        }else{
            s+=" "
        }
    }
    s+="\n";
}
console.log(s);