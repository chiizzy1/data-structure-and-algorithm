/*  *****
Challenge: Easy  387. First Unique Character in a String

Instructions: Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1

                                    MY Solution
                                    
        var firstUniqChar = function(s) {
            let obj = {};
        
            for (let i = 0; i < s.length; i++){
                obj[s[i]] = obj[s[i]] + 1 || 1
            }  
        
            for (char in obj){
                if (obj[char] === 1){
                    return s.indexOf(char);
                }
            }
        
            return -1;
        };

                            
*/



