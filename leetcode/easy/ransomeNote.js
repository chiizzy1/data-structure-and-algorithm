/*  *****
Challenge: Easy  Ransome Note

Instructions:  Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false    

                                MY Solution

            var canConstruct = function(ransomNote, magazine) {
                let obj = {};
                
                for (let i = 0; i < magazine.length; i++){
                    let char = magazine[i];  
                    obj[char] = obj[char] + 1 || 1;  
                }
                
                for (let i = 0; i < ransomNote.length; i++){
                    let check = ransomNote[i];  
                    if (!obj[check] || obj[check] < 1){
                        return false
                    }
                    obj[check]--
                }
                
                return true
            };

*/







    