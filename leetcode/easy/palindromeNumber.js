/*  *****
Challenge:  9. Palindrome Number
Instructions:  
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.


                                MySolution

              var isPalindrome = function(x) {
                return x.toString() === [...x.toString()].reverse().join('')
            };  

*/