/*  *****
Challenge: 242. Valid Anagram

Instructions:
Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false


                                    MY Solution

                var isAnagram = function(s, t) {
                    let map = new Map();

                    for (let i = 0; i < s.length; i++){
                        let char = s[i];
                        map.set(char, (map.get(char) || 0) + 1)
                    }
                    
                    for (let i = 0; i < t.length; i++){
                        let char = t[i];
                        if (map.has(char)){
                            map.set(char, map.get(char) - 1)

                            if (map.get(char) === 0){
                                map.delete(char);
                            }
                        }else{
                            return false
                        }
                    }

                    return map.size === 0
                };
                            
*/