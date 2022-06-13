/**
 * @param {number[]} nums
 * @return {number[][]}

If the first integer to consider has index n that means that the current permutation is done.
Iterate over the integers from index first to index n - 1.
Place i-th integer first in the permutation, i.e. swap(nums[first], nums[i]).
Proceed to create all permutations which starts from i-th integer : backtrack(first + 1).
Now backtrack, i.e. swap(nums[first], nums[i]) back.

 let tempa=[];
    let final=[];
    function backtrack(tempa,nums){
        if(nums.length===0){
            final.push(tempa.slice());
            return;
        }
        for(let i=0;i<nums.length;i++){
            tempa.push(nums[i]);
            nums.splice(i,1);
            backtrack(tempa,nums,final);
            nums.splice(i,0,tempa.pop());

        }
    }
    backtrack(tempa,nums,final);
    return final;

 */
var permute = function(nums) {
   let temp = []
    let result = [];
    const backTracking = (temp,nums) =>{
        //if all the combinations are done
        if(nums.length === 0){
            result.push(temp.slice());
            return;
        }
        for(let i = 0 ; i <nums.length;i++){
//place i-th integer first in the current permutation
            temp.push(nums[i]);
//use next integers to complete backtracking
            nums.splice(i,1)
//backtrack
            backTracking(temp,nums,result)
            nums.splice(i,0,temp.pop())
        }   
    }
//backtrack
backTracking(temp,nums,result);
//return the final result
return result;
};