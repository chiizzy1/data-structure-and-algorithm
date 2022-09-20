/*  *****
Challenge:  Squares of a Sorted Array

Instructions:  Given an integer array nums sorted in non-decreasing order, return an array of 
the squares of each number sorted in non-decreasing order.

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].


                                MySolution

                var sortedSquares = function(nums) {
                    const squared = nums.map(num => num * num)
                    return squared.sort((a,b) => a - b)
                };

                            Optimized Solution
                
                Pseudo Code:
                // - initialize an empty array to hold sorted values
                // - Create a left pointer to hold value of the smallest index
                // - Create a right pointer to hold value of the biggest index
                // NB -  remember that the nums array is sorted  so the smallest value 
                    will always be at the beginning while the largest value will always be at the end
                // - It could contain negative numbers which would appear at the beginning of the nums array
                    but when squared could have greater value the some other numbers in the array
                    e.g [-4,-1,0,3,10]
                // - loop through the nums array and compare the Absolute values of numbers at both ends
                // - place the number whose abs value is greater at the end of the sortedArr
                // - increment the value of l and move to the next number
                // -  decrement the value of r and move to the next number
                
                var sortedSquares = function(nums) {
                    
                    let sortedArr = []
                    // leftPointerIndex
                    let l = 0 
                    // rightPointerIndex 
                    let r = nums.length - 1
                   
                    for (let w = r; w >= 0; w--){
                        
                        if (Math.abs(nums[l]) > Math.abs(nums[r])){
                            sortedArr[w] = nums[l] * nums[l]
                            // increment the value of l and move to the next number 
                            l++
                        }else{
                            sortedArr[w] = nums[r] * nums[r]   
                            // decrement the value of r and move to the next number
                            r--
                        }
                    }
                    
                    return sortedArr
                };

                

*/