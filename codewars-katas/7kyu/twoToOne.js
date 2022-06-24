/*  *****
Challenge: 7kyu Two to One

Instructions: Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

                                       MY Solution
                   function longest(s1, s2) {
                        let arr = [...s1, ...s2]
                        return [...new Set(arr)].sort((a, b) => a < b ? -1 : 1).join('')
                    }
                                
                                       CodeWars Solution(s)
                const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')
*/
