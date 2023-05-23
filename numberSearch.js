let n = 52365636961;
let d = 6;
function count(n,d){
    let countN = 0;
    while(n >0){
        let lastDigit = n%10;
        if(lastDigit==d){
            countN++;

        }
        n=Math.floor(n/10)
    }
    console.log(countN)
}
//.log(countN)
count(n,d);