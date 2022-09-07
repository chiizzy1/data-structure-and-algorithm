/*  *****
Challenge: 8kyu  Palindrome Strings!

Instructions:  Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

Examples(Input ==> Output)
"anna"   ==> true
"walter" ==> false
12321    ==> true
123456   ==> false

                                MySolution

                function isPalindrome(line) {
                    line = `${line}`
                    let str = ""
                    
                    for (let i = line.length; i > 0; i--){
                        str += line[i-1]
                    }
                    
                    return str === line
                }

                                    CodeWar Solution
            
                const isPalindrome = line => line == line.split('').reverse().join('')
                 
*/