/*  *****
Challenge: Easy  Valid Palindrome

Instructions: A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.



                                    MY Solution
            var isPalindrome = function(s) {
                word = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
                let reversedWord = ""
                for (let i = word.length - 1; i >= 0; i--){
                    reversedWord += word[i]
                }
                return reversedWord === word
            };
                            
*/






