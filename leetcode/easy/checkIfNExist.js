/*  *****
Challenge:  Easy Check If N and Its Double Exist

Instructions: Given an array arr of integers, check if there exist two indices i and j such that :

i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]

Example 1:

Input: arr = [10,2,5,3]
Output: true
Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]
Example 2:

Input: arr = [3,1,7,11]
Output: false
Explanation: There is no i and j that satisfy the conditions.



                                MySolution

            var checkIfExist = function(arr) {
                if ( arr === null || arr.length < 2){ return false }
                
                for (let i = 0; i < arr.length; i++){
                    let num = arr[i];
                    let num2 = num/2
                    let index = arr.indexOf(num2)
                    
                    if (index !== i && index !== -1 ){
                        return true
                    }
                }
                
                return false
            };

                        Optimized Solution
            
            var checkIfExist = function(arr) {
                const set = new Set();
                
                for(let i = 0; i < arr.length; i ++) {
                const currValue = arr[i];
                
                if(set.has(currValue)) {
                    return true
                }
                set.add(currValue / 2);
                set.add(currValue * 2);
                }
            
            return false;
            };


                    Optimized Solution 2

            var checkIfExist = function(arr) {
                const hashTable = {};
                
                for(let i = 0; i < arr.length; i ++) {
                const currValue = arr[i];
                
                if(hashTable[currValue] !== undefined) {
                    return true
                }
                hashTable[currValue / 2] = currValue;
                hashTable[currValue * 2] = currValue;
                }
            
            return false;
            };
*/