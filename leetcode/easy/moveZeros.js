/*  *****
Challenge: leetCode easy Move Zeros

Instructions: Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]

                             MySolution
                             
// Pseudo code:
// use a pointer to count total numbers of non-zero 
// move non-zero nums forward
// move zeros backward

                var moveZeroes = function(nums) {
                    let a = 0;
                    
                    for ( let i = 0; i < nums.length; i++ ){
                        if (nums[i] !== 0){
                            nums[a] = nums[i];
                            a++
                        }
                    }
                    
                    for (let i = a; i < nums.length; i++){
                        nums[i] = 0
                    }
                    return nums
                };
            
         
*/