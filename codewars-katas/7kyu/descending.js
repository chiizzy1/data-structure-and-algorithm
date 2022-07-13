 /*  *****
Challenge: 7 kyu  Descending Order

Instructions: Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321


                                    MY Solution

                        function descendingOrder(n){
                            return [...`${n}`].sort((a,b) => a - b).reverse().join('') * 1
                          }
                                    
                                    CodeWars Solution(1)
                function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}
                            
*/