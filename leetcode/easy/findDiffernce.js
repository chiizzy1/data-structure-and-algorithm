



/*  *****
Challenge: easy 389. Find the Difference

Instructions:
Example 1:

Input: s = "abcd", t = "abcde"
Output: "e"
Explanation: 'e' is the letter that was added.
Example 2:

Input: s = "", t = "y"
Output: "y"

                                    MY Solution
            var findTheDifference = function(s, t) {
                let obj = {};

                for (let i = 0; i < s.length; i++){
                    obj[s[i]]  = obj[s[i]] + 1 || 1;
                }

                for (let a = 0; a < t.length; a++){
                    if ( !obj[t[a]] || obj[t[a]] < 1 ){
                        return t[a];
                    }else{
                        obj[t[a]]--
                    }
                }

                return ""
            };                       
*/



