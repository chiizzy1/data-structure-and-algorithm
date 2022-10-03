



/*  *****
Challenge: 7kyu 
Multiply Word in String

Instructions:  Example

modifyMultiply ("This is a string",3,5) 
Should return

"string-string-string-string-string"

Since the 3rd word is 'string'(starting from 0 remember) and the third paramater indicates that it should be repeated 5 times.

                                    MySolution

            function modifyMultiply (str,loc,num) {
                str = str.split(' ')
                return str[loc] + `-${str[loc]}`.repeat(num-1)
            } 
                  
                    Codewars Solution

            function modifyMultiply(str,i,n) {
             return Array(n).fill(str.split(' ')[i]).join('-');
            } 
*/