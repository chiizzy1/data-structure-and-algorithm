/*  *****
Challenge: 6kyu  Break camelCase

Instructions: Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""


                                    MySolution
                                    
                    function solution(str) {
                        let ans = ""
                        
                        for (let i = 0; i < str.length; i++){
                        if ( str[i] === str[i].toUpperCase() ){
                            ans += ` ${str[i]}`
                        }
                        else ans += str[i]
                        }
                     return ans
                    }
                                    
                                  CodeWars Solution 

                 function solution(string) {
                    return(string.replace(/([A-Z])/g, ' $1'));
                }
*/