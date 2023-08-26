// you are give of n pair where pairs[i]=[lefti-righti]

let pairs=[
    [1,2],
    [2,3],
    [3,4]
];

function longestChain(pairs){
    pairs.sort((a,b)=>a[1]-b[1]);
    let res =1;
    let prev=pairs[0];
    console.log(prev);
    for(let i=1;i<pairs.length;i++){
        let curr=pairs[i];
        if(curr[0]>prev[1]){
            res++;
            prev=curr
        }
    }
    return res
};
console.log(longestChain(pairs))