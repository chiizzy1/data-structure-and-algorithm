/*  *****
Challenge: 7kyu

Instructions:


                               My Solution
                               
            function validParentheses(parenStr) {
  
                let oppBrac = { ')' : '('};
                let stack = [];
                
                for (let i = 0; i < parenStr.length; i++){
                    if (parenStr[i] === '(' ){
                    stack.push(parenStr[i]);
                    } else{
                    let last = stack[stack.length - 1];
                    
                    if (oppBrac[parenStr[i]] === last){
                        stack.pop()
                    }else{
                        return false
                    }
                    }
                }
                
                return stack.length === 0;
                }
                                
*/