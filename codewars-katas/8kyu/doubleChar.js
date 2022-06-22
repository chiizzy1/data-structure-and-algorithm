
/*  *****
Challenge: 8 kyu Double Char       

                                       MY Solution

               function doubleChar(str) {
                return str.split('').map((c) => c.concat(c)).join('')
                }
                                       CodeWars Solution(s)

                                function doubleChar(str) {
                                     return str.replace(/(.)/g, "$1$1")
                                }
                                
*/
