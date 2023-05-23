
console.log("hello 1")
let IsAnangram = function(){
    
   if(s.length == t.length) return "false";
   let f1 = Array(26).fill(0);
   let f2 = Array(26).fill(0);
   for(let i = 0 ; i < s.length;i++  ){
    let idx = s[i].charCodeAt() - 97;
    f1[idx]++;
   }
   for(let i = 0 ; i < t.length;i++  ){
    let idx = t[i].charCodeAt() - 97;
    f2[idx]++;

}
for(let i = 0 ; i < 26 ; i++){
    if(f1[i] ==f2[i]){
        console.log('true')
    }else{
        console.log('false')
    }
}

}

let s = "anagram";
let t = "nagaram";
IsAnangram(s,t);

window.oneer