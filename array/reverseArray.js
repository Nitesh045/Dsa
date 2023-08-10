// revers k element in array 
function revers(a,sp,ep){

    let i=sp;
    let j = ep;
    while(i<j){
        let temp = a[i];
        a[i]=a[j];
        a[j]=temp
        i++,j--
    }
}

let k =2;
let a=[1,2,3,4,5,6,7]
let n = a.length;
revers(a,n-k,n-1);// reverse the k element 
console.log(a);
console.log('a')
revers(a,0,n-k-1);// now reverrse the rest element
console.log(a);
revers(a,0,n-1)// now reverse the whole element
console.log(a)