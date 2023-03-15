

/*  *****
Challenge: 6 kyu  Longest Palindrome

Instructions: 
Find the length of the longest substring in the given string s that is the same in reverse.

As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

If the length of the input string is 0, the return value must be 0.

Example:
"a" -> 1 
"aab" -> 2  
"abcde" -> 1
"zzbaabcd" -> 4

                                  Codewars Solution
                                    
                function isPalindrome(s) {
                        return s === s.split("").reverse().join("");
                    }
                    
                    longestPalindrome=function(s){
                        var max = 0;
                        
                        for(let i = 0; i <= s.length; i++) {
                        for(let j = 0; j < i; j++) {
                            if(isPalindrome(s.substring(j, i))) max = Math.max(max, i - j);
                        }
                        }
                        
                        return max;
                }

                                    CodeWars Solution(1)
            
                    
                   
                            
*/