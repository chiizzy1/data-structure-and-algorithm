/*  *****
Challenge: Easy 14. Longest Common Prefix

Instructions:  
Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

                                    MY Solution
                        
             var longestCommonPrefix = function(strs) {
    
                let pre = "";
                
                for (let i = 0; i < strs[0].length; i++){
                    if (strs.every(str => strs[0][i] === str[i])){
                        pre += strs[0][i];
                    }else{
                        return pre
                    }
                }
                
                return pre
            }; 
                            // Better Solution
            
            var longestCommonPrefix = function(strs) {
                strs.sort();
                for (let i = 0; i < strs[0].length; i++) {
                    if (strs[0][i] !== strs[strs.length - 1][i]) return strs[0].substr(0, i);
                }
                return strs[0];
            };
*/



