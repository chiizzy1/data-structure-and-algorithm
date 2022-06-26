/*  *****
Challenge: 7kyu Strong Number (Special Numbers Series #2)

Instructions: Strong number is the number that the sum of the factorial of its digits is equal to number itself.

For example, 145 is strong, since 1! + 4! + 5! = 1 + 24 + 120 = 145.

Task
Given a number, Find if it is Strong or not and return either "STRONG!!!!" or "Not Strong !!".

Notes
Number passed is always Positive.
Return the result as String
Input >> Output Examples
strong_num(1) ==> return "STRONG!!!!"


                                       MY Solution
                  
                           function strong(n) {
                                let a = String(n).split('')
                                    let factorialsArr = []
                                    a.map(num => {
                                        let sum = 1;
                                        for (let i = 1; i <= Number(num); i++){
                                            sum = sum * i 
                                        }
                                        factorialsArr.push(sum)
                                    })

                                    return n === factorialsArr.reduce((acc, val) => acc + val ) ? "STRONG!!!!" : "Not Strong !!"
                            }

                                       CodeWars Solution(s)
                                 const strong = n =>
    [...`${n}`].reduce((p,c) => p+[1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880][c], 0) == n ? "STRONG!!!!" : "Not Strong !!" ;

                                CodeWars Solution(2)
*/

