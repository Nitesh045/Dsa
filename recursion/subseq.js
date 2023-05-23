function f(idx,arr,subseq){
    if(idx==arr.length){
        console.log("("+subseq+")")
        return
    }
    f(idx+1,arr,subseq+arr[idx]);

    f(idx+1,arr,subseq);
}
let arr=[1,2,3];
f(0,arr,"");