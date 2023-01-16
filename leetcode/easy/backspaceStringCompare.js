
/*  *****
Challenge: easy 844. Backspace String Compare

Instructions:Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

 

Example 1:

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".
Example 2:

Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".
Example 3:

Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".


                                    MY Solution
              var backspaceCompare = function(s, t) {
                    let sStack = [];
                    let tStack = [];

                    for (let i = 0; i < s.length; i++){
                        if (s[i] == "#"){
                            sStack.pop()
                        }else{
                            sStack.push(s[i])
                        }
                    }

                    for (let a = 0; a < t.length; a++){
                        if (t[a] == "#"){
                            tStack.pop()
                        }else{
                            tStack.push(t[a])
                        }
                    }

                    return sStack.join("") === tStack.join("")
                };
                   
*/



