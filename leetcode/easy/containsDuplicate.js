/*  *****
Challenge: Easy  Contains Duplicate

Instructions:  Given an integer array nums, return true if any value appears at least twice 
in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false               

                                MY Solution
            
            var containsDuplicate = function(nums) {
                let obj = {}
                
                for (let i = 0; i < nums.length; i++){
                    let num = nums[i]
                    if (!obj[num]){
                        obj[num] = 1;
                    }else{
                        return true
                    }
                }
                return false
            };    
            
*/


