/*  *****
Challenge:  Easy Check If N and Its Double Exist

Instructions:  Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]


Example 1:

Input: arr = [3,5,5]
Output: false

Example 2:

Input: arr = [0,3,2,1]
Output: true
                             MySolution

           var validMountainArray = function(arr) {
                if ( arr.length < 3 ){ return false }
                
                let max = 0;
                let maxIndex
                
                for (let i = 1; i < arr.length; i++){
                    if ( arr[i] === arr[i-1] || arr[i] === arr[i+1] ){ return false }
                    if ( arr[i] >= max ){
                        max = arr[i];
                        maxIndex = i
                    }
                }
                
                for (let i = 0; i < maxIndex - 1; i++){
                    if (arr[i] > arr[i + 1]){ return false }
                }
                
                for (let i = maxIndex + 1; i < arr.length; i++){
                    if (arr[i] < arr[i + 1]){ return false }
                }
                
                return arr[maxIndex] > arr[maxIndex - 1] && arr[maxIndex] > arr[maxIndex + 1]
            };

                        Optimized Solution
            
           var validMountainArray = function (arr) {
                if (arr.length < 3){ return false}
                if (arr[1] < arr[0]){return false}

                let maxFound = false

                for (let i = 0; i < arr.length - 1; i++) {
                    if (arr[i + 1] === arr[i]) return false
                    if (maxFound && arr[i + 1] > arr[i]) return false
                    if (arr[i] > arr[i + 1]) {
                    maxFound = true
                    }
                }
                // return maxFound ? true : false
                return maxFound
            }
            
*/