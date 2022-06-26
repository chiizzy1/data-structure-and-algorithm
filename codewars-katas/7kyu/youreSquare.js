

/*  *****
Challenge: 7kyu You're a square!


Instructions: Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false


                                       MY Solution
                  
                            var isSquare = function(n){
                                return Math.sqrt(n) === Math.floor(Math.sqrt(n))
                            }

                                       CodeWars Solution(s)
                                        function isSquare(n) {
                                return Math.sqrt(n) % 1 === 0;
                                }

                                CodeWars Solution(2)
            const isSquare = n => Number.isInteger(Math.sqrt(n));
*/

