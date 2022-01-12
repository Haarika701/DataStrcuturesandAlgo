// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 
//move all the zeroes at the end of array without returning anything.
// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 
 //check for the edge cases.....if array is empty return 0
 //first element should not be touched...
 
 //writepointer =  1 ;
 //iterate the array from the second element, i = 1 as 1st element is in correct posiition
  //if the next element is 0
  //copy it to writepointer
  //writepointer++
  //return writepointer
  
 */
//move all the the zeroes at the end of the array,
var moveZeroes = function(nums) {
    let writePointer = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0 ){
            nums[writePointer] = nums[i];
            writePointer++
        }
     
    }
    for (let i = writePointer; i < nums.length;i++){
        nums[i] = 0;
    }
    
};