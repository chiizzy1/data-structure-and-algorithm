/*  *****
Challenge: easy 520. Detect Capital

Instructions:  We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Given a string word, return true if the usage of capitals in it is right.

Example 1:

Input: word = "USA"
Output: true
Example 2:

Input: word = "FlaG"
Output: false

                                    MY Solution
                        
                   

                                    var detectCapitalUse = function(word) {
                                        if (word[0] === word[0].toUpperCase() && word[word.length - 1] === word[word.length - 1].toUpperCase()){
                                            return [...word].every(char => char === char.toUpperCase());
                                        }else if (word[0] === word[0].toUpperCase()){
                                            return word.slice(1) === word.slice(1).toLowerCase();
                                        }else{
                                            return word === word.toLowerCase();
                                        }
                                    };

                                leetCode Solution()
                var detectCapitalUse = function(word) {
        return word === word.toUpperCase() || word.slice(1) === word.slice(1).toLowerCase()
        };
*/