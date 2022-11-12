/*  *****
Challenge: Easy  Majority Element

Instructions:  Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

                                MY Solution

            var majorityElement = function(nums) {
                let obj = {};
                let count = 0;
                let highest 
                
                for (let i = 0; i < nums.length; i++){
                    obj[nums[i]] = obj[nums[i]] + 1 || 1
                }
                
                for ( num in obj ){
                    if (obj[num] > count){
                        count = obj[num]
                        highest = num
                    }
                }
                
                return highest
            };

*/







    

