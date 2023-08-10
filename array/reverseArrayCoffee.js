function reverseA(a,sp,ep){
    let i =sp;
    let j = ep;
    while(i<j){
        let temp = a[i];
        a[i]=[j];
        a[j]=temp;
        i++,j--;
    }
}
let k =2;
let a=[1,2,3,4,5,6];
let n =a.length;
reverseA(a,4,n-1);
console.log(a);