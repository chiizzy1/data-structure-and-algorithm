/*  *****
Challenge: Medium  Maximum Subarray

Instructions:  Given an integer array nums, find the subarray which has the largest sum and return its sum.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23

                                    MY Solution
                        
                var maxSubArray = function(nums) {
                    let maxSubArr = nums[0];
                    let subArrSum = 0;
                    
                    for (let i = 0; i < nums.length; i++){
                        if (subArrSum < 0){
                            subArrSum = 0;
                        }
                        subArrSum += nums[i];
                        maxSubArr = Math.max(maxSubArr, subArrSum)
                    }
                    return maxSubArr
                };

                            
*/



