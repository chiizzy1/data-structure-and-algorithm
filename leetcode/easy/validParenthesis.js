
/*  *****
Challenge: Easy Valid Parenthesis

Instructions:  
Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false


                                    MY Solution

                                
           var isValid = function(s) {
                let stack = [];
                let pair = { "}" : "{", ")" : "(",  "]" : "[" };
                
                for (let i = 0; i < s.length; i++){
                    if (s[i] === "[" || s[i] === "{" || s[i] === "(" ){
                        stack.push(s[i])
                    }else{
                        if (stack[stack.length - 1] === pair[s[i]]){
                            stack.pop()
                        }else{
                            return false
                        }
                    }
                }
                return stack.length === 0
            };
                            
*/