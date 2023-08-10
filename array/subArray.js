let arr = [1,2,3];
let n=arr.length;
for(let sp =0;sp<n;sp++){
    for(let ep =sp;ep<n;ep++){
        let s='';
        for(let i=sp;i<=ep;i++){
            s+=" "+arr[i];
        }
      console.log(s)
    }
    "<br/>"
}