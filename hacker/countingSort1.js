let arr=[1,1,3,2,1];

function countingSort(arr) {
    let newarray= new Array(5).fill(0);
    for(let num of arr){
        newarray[num]++;
    }
    return newarray

}
console.log(countingSort(arr))