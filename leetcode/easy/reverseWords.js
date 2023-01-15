/*  *****
Challenge: easy 557. Reverse Words in a String III

Instructions:Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Example 2:

Input: s = "God Ding"
Output: "doG gniD"
                                    MY Solution
              var reverseWords = function(s) {
                    s = s.split(" ");
                    return s.map(word => [...word].reverse().join('')).join(" ")
                };
                   
*/



