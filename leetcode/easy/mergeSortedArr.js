/*  *****
Challenge:  Easy  Merge Sorted Array

Instructions:  You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
Examples:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].

                                MySolution

                var merge = function(nums1, m, nums2, n) {
                    let indexA = 0;
                    let indexB = 0;
                    
                    while( indexA < (m + n) && indexB < n ){ 
                        if ( nums1[indexA] > nums2[indexB] ) {
                            for (let j = (m + n) - 1; j > indexA; j--) {
                                nums1[j] = nums1[j-1];
                            }
                            nums1[indexA] = nums2[indexB]
                            indexB++; 
                        }else{
                            indexA++
                        }
                    }
                    
                    while(indexB < n ){
                        let getIndex = ((m+n)-1) - ((n-1) - indexB)
                        nums1[getIndex] = nums2[indexB]
                        indexB++
                    }
                    return nums1
                };

                        Optimized Solution
            
            var merge = function(nums1, m, nums2, n) {
                    // get last number in first array
                    let first = m -1;
                    // get last number in second array
                    let second = n -1;
                    // get all numbers in both arrays
                    let indexA = (m + n) - 1;
                    
                    //Loop through and compare last numbers in both arrays and add the bigger
                    // number to the end of nums1 array
                    
                    while(second >= 0){
                        let aVal = nums1[first];
                        let bVal = nums2[second];
                        
                        if (aVal > bVal){
                            nums1[indexA] = aVal;
                            first--;
                            indexA--;
                        }else{
                            nums1[indexA] = bVal;
                            second--;
                            indexA--
                        }
                    }
                };

*/