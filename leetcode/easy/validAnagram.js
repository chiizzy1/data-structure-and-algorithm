/*  *****
Challenge: Easy  Valid Anagram

Instructions: Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

                                    MY Solution
            
            var isAnagram = function(s, t) {
                s = [...s].sort().join('');
                t = [...t].sort().join('')
                return s === t
            };          
            
            
                        Optimized Solution

            var isAnagram = function(s, t) {
                if (s.length != t.length) return false;
                const hashTable = {};

                for(let i = 0; i < s.length; i++) {
                    if (!hashTable[s[i]]) {
                    hashTable[s[i]] = 0;
                    }
                    hashTable[s[i]]++;
                }

                for(let j = 0; j< t.length; j++) {
                    if (!hashTable[t[j]]){
                    return false;  
                    } 
                    hashTable[s[j]]--; 
                }

                return true;
            };

    Link: https://dev.to/diballesteros/javascript-leetcode-valid-anagram-2001
*/

