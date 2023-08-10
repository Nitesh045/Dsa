// // Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]]
let nums = [2,7,11,15];
let target = 9;
 function TwoSum  (data,i){
    let Output=[];
    nums.forEach((data,i)=>{
        for(let x in nums){
            console.log(i);
            if(x!=i){
                var result = data +nums[x];
                if(result===target){
                    Output.push(i);
                }
            }
        }
    })
    console.log(Output);
 }
 TwoSum();