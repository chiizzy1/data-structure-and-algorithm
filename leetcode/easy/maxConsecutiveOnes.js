

/*  *****
Challenge: Max Consecutive Ones

Instructions:  Given a binary array nums, return the maximum number of consecutive 1's in the array.

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3

                                    MySolution

                var findMaxConsecutiveOnes = function(nums) {
                    let counter = 0;
                    let val = []
                    for (let w = 0; w < nums.length; w++){
                        if (nums[w] === 1){
                            counter++
                        }
                        
                        if (nums[w] !== 1 ){
                            val.push(counter)
                            counter = 0
                        }
                    }
                    
                    let ans = Math.max(...[...val, counter])
                    return ans
                };
                
*/