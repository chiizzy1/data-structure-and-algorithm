/*  *****
Challenge: 7kyu  Anagram Detection

Instructions:  An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"

                                    MySolution
                // write the function isAnagram
var isAnagram = function(test, original) {
  test = test.toLowerCase().split('')
  original = original.toLowerCase().split('')
  
  
  return test.sort().join('') === original.sort().join('')
};    
              
                                CodeWar Solution
                                
                
                
*/