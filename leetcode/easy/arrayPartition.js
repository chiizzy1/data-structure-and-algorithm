/*  *****
Challenge: easy 561. Array Partition
Instructions:
Input: nums = [1,4,3,2]
Output: 4
Input: nums = [6,2,6,5,1,2]
Output: 9

                                    MY Solution
           var arrayPairSum = function(nums) {
                nums.sort((a, b) => a - b)

                let sum = 0;

                for (let i = 0; i < nums.length; i += 2){
                    sum += nums[i]
                }

                return sum;
            };   
                   
*/



