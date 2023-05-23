let arr = [1,2,3];
let s=""
for(let sp = 0; sp <=arr.length;sp++){
    for(let ep = 0; ep <arr.length;ep++){
        let s="";
        for(let i = sp;i<=ep;i++ ){
            s+=" "+arr[i];
        }
        console.log(s);
    }
   
}


// let arr =[1,2,3];

// for(let sp = 0;sp<arr.length;sp++){
//     for(let ep=0;ep<arr.length;ep++){
//         let s=" ";
    
//     for(let i = sp;i<=ep;i++){
//         s+=" "+arr[i];
//     }
//     console.log(s); 
// }

// }

// let num = [2,3,5];
// let d=5;
// for(let i =0; i<num.length;i++){
//     for(let j = i+1;j<num.length;j++){
//         if(num[i]+num[j]==d){
//             console.log(i,j)
//         }
//     }
// }


//let num =[4,5,-5,-2,4,5,9,2,1,-9];

//