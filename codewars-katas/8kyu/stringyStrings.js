/*  *****
Challenge: Stringy Strings

Instructions:  write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

                                    MySolution
                function stringy(size) {
                    let ans = ""
                    for(let i=0; i<size; i++){
                        i % 2 === 0 ? ans += "1" : ans += "0"
                    }  
                    return ans
                }
                                CodeWars Solution

                function stringy(size) {
                    var str='';
                    for( var i=1; i<=size; i++ )
                    str+=i%2;
                    return str;
                }
*/