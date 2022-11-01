/*  *****
Challenge:  6kyu  
Valid Braces

Instructions:  Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False

                                   CodeWar Solution

               function validBraces(braces){
                    var matches = { '(':')', '{':'}', '[':']' };
                    var stack = [];
                    var currentChar;
                
                    for (var i=0; i<braces.length; i++) {
                    currentChar = braces[i];
                
                    if (matches[currentChar]) { // opening braces
                        stack.push(currentChar);
                    } else { // closing braces
                        if (currentChar !== matches[stack.pop()]) {
                        return false;
                        }
                    }
                    }
                
                    return stack.length === 0; // any unclosed braces left?
                }
                            
*/