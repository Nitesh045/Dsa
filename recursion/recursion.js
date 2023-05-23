// function fiboRecur(n){
//     if(n==0) return 0;
//     if(n==1) return 1;
//     let im1 = fiboRecur(n-1);
//     let im2 = fiboRecur(n -2);
//     console.log( im1 + im2);
// }
// fiboRecur(5);


function factorial(n){
    if(n==1) return 1;
  //  if(n==2) return 2;
    let im1 = factorial(n -1);
    //let im2 = factorial(n-2);
    return n * im1;
}
console.log(factorial(5));
