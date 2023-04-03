/*  *****
Challenge:  496. Next Greater Element I

Instructions:  
Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]

Input: nums1 = [2,4], nums2 = [1,2,3,4]
Output: [3,-1]
                                LeetCode Solution

              var nextGreaterElement = function(nums1, nums2) {
                    let ans = []
                    for (let i of nums1) {
                        let x = -1
                        for (let j = nums2.length-1; nums2[j]!=i; j--) {
                            if (nums2[j] > i) x = nums2[j] 
                        }
                        ans.push(x)
                    }
                    return ans;
                };  

*/