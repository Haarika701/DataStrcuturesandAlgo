// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.
// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Example 2:
// Input: nums = [1]
// Output: 1

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23
/**own words - find the largest sum of the subarray.

d
   pseudocode-
   input is array containing -ve and +ve
   output containing sum of the subarray
   => initialize the maxsubarray = 0
   => initialize new subarray var = 0 to store first element 
   => iterate through the second element of the  array 
         => store the num to a temp variable
         =>if the current subarray is -ve, restart the process offind the                subarray with maximum sum
         
   => maxsubarray
       
        
 * @param {number[]} nums
 * @return {number}
 */
   var maxSubArray = function(nums) {
    let maxSubArray = nums[0];
    let currentSubArray = nums[0];
    for(let i = 1; i<nums.length;i++){
        let n = nums[i];
        currentSubArray = Math.max(n,currentSubArray + n)
        maxSubArray = Math.max(currentSubArray,maxSubArray,)
    }
    return maxSubArray;
    
};