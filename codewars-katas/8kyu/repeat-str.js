/*  *****
Challenge: 8kyu String repeat

Instructions: Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
              

                                       MY Solution

                function repeatStr (n, s) {
                let ans = ''
                for (let i = 0; i < n; i++){
                    ans += s;   
                }
                return ans
                }
               
                                       CodeWars Solution(s)

                function repeatStr (n, s) {
                return s.repeat(n);
                }
                    CodeWars Solution(2)
                const alternate = (n, a, b) => n ? [a, ...alternate(n-1, b, a)] : [];
*/
