
/*  *****
Challenge: 7 kyu
Recursion #1 - Factorial

Instructions: In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,

5! = 5 * 4 * 3 * 2 * 1 = 120.

The value of 0! is 1.


                                    MY Solution
              const factorial = n => {
                   return n === 0 ? 1 : n * factorial(n - 1)
                };
                   
*/



