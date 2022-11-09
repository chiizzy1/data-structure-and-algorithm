/*  *****
Challenge: Easy  Reverse String

Instructions: Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]



                                    MY Solution
            var reverseString = function(s) {
                let start = 0;
                let end = s.length - 1;
                
                while (end > start){
                    let container = s[start];
                    s[start] = s[end];
                    s[end] = container
                    
                    start++;
                    end--
                }
                return s
            };
                            
*/