/*  *****
Challenge:  345. Reverse Vowels of a String

Instructions:  
Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"

                                MySolution

                var reverseVowels = function(s) {
                    let vowels = {a:1, e:1, i:1, o:1, u:1, A:1, E:1, I:1, O:1, U:1}
                    s = s.split("");

                    let left = 0;
                    let right = s.length - 1;

                    while(left < right){
                        if(vowels[s[left]] !== undefined && vowels[s[right]] !== undefined){
                            [s[left], s[right]] = [s[right], s[left]];
                            left++;
                            right--;
                        }

                        if(vowels[s[left]] === undefined){
                            left++
                        }
                        if(vowels[s[right]] === undefined){
                            right--;
                        }
                    }

                    return s.join("");
                };

*/