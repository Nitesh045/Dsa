let columnNumber =1;
let convertToTitle=function(columnNumber){
    let ans='';
    while(columnNumber>0){
        let code =(--columnNumber)%26
        console.log(code);
        ans=String.fromCharCode(code+65)+ans;
        columnNumber=(columnNumber-code)/26
    }
    return ans
}
console.log(convertToTitle(columnNumber));