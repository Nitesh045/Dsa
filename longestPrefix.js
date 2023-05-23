let str = ["flower","flow","flight"];

let longestPrefix = function(str){
    let ans = [];
    for(let i = 0; i <str[0].length;i++){
        for(let j = 1;j <str.length;j++){
            if(str[0][i]!=str[j][i]){
                return ans.join('');
            }else{
                ans.push(str[0][i]);
            }

        }
    }
    console.log( ans.join(''))

}
longestPrefix(str);
console.log('hello')