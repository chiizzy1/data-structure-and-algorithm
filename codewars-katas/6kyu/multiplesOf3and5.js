/*  *****
Challenge: 6kyu Multiples of 3 or 5

Instructions: If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.


                                       MY Solution
                  
                        function check(num){
                            if (num > 0){
                                let total = []
                                for (let i = 1; i < num; i++) {
                                    if (i % 3 === 0 || i % 5 === 0 ){ total.push(i)}
                                }
                                return [...new Set(total)].reduce((acc, val) => acc + val, 0)
                            }
                            else {return 0}
                        }
                                       CodeWars Solution(s)
                                 
                               function solution(number){
                                return number < 3 ? 0
                                : [...Array(number).keys()]
                                    .map(int => (int % 3 === 0 || int % 5 === 0) ? int : 0 )
                                    .reduce((a, b) => a + b )

                                }
                                CodeWars Solution(2)
*/

