/*  *****
Challenge: leetCode easy Replace Elements with Greatest Element on Right Side

Instructions: Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.

Example 1:

Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]
Explanation: 
- index 0 --> the greatest element to the right of index 0 is index 1 (18).
- index 1 --> the greatest element to the right of index 1 is index 4 (6).
- index 2 --> the greatest element to the right of index 2 is index 4 (6).
- index 3 --> the greatest element to the right of index 3 is index 4 (6).
- index 4 --> the greatest element to the right of index 4 is index 5 (1).
- index 5 --> there are no elements to the right of index 5, so we put -1.

Example 2:

Input: arr = [400]
Output: [-1]
Explanation: There are no elements to the right of index 0.


                             MySolution
                             
// Pseudo code:
// save the last value in the "last" variable
// replace last element with -1
// get the max value between the next value "arr[i + 1]" and value stored in "last" variable
// replace value of "last" variable with arr[i]


            var replaceElements = function(arr) {
                let last;
                
                for (let i = arr.length -1; i >= 0; i--){
                    if (i === arr.length - 1){
                        last = arr[i]
                        arr[i] = -1;
                    }else{
                        let max = Math.max(last, arr[i + 1]) 
                        last = arr[i]
                        arr[i] = max
                    }
                }
                
                return arr
            };
         
*/