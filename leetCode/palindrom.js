let num=121;
function poli(num){
    let reverse=0;
    let x=num
    while(x>0){
        let digit=x%10;
        reverse=reverse*10+digit;
        x =Math.floor(x/10)
    }
    console.log(reverse+" ",num)

    return reverse==num
}
console.log(poli(num))