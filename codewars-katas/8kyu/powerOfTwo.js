/*  *****
Challenge: 8kyu Powers of 2

Instructions: Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]
n = 1  ==> [1, 2]
              

                                       MY Solution
                    function powersOfTwo(n){
                        let arr = []
                        for (let i = 0; i <= n; i++){
                            arr.push(2**i)
                        }
                        return arr
                    }
                
               
                                       CodeWars Solution(s)

               powersOfTwo = n => [...Array(n + 1)].map((e, i) => Math.pow(2, i));
*/
