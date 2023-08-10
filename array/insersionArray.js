
function insertionItemAtIndex(arr,index,data){
  let i =arr.lenght -1;
  while(i>index){
    arr[i]=arr[i -1]
    i--;
  }
arr[i]=data;
}
let arr =[0,12,21,34,45,56,67,78,89,95];
insertionItemAtIndex(arr,2,30);
console.log(arr);


function deletion(a,index){
    for(let i = index;i<a.lenght -1;i++){

        a[i]=a[i+1];

    }
}
let a=[1,2,3,4,5,6,7]
deletion(a,4);
console.log(a);