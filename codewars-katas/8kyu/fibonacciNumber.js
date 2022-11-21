/*  *****
Challenge: Fibonacci Number

Instructions:  0, 1, 1, 2, 3, 5, 8, 13,...
You get first two starting numbers, 0 and 1, and the next number in the sequence is always the sum of the previous two numbers. Fibonacci introduced it in 1202, in his book Liber Abaci.

So what will be your task? You should write a function fib, that takes one parameter steps, and returns a number from the Fibonacci sequence, based on the parameter steps, which determines the position in Fibonacci number.

For example fib(0) returns 0, fib(4) returns 3, fib(15) returns 610.


                                MY Solution

          var fib = function (steps) {
            if (steps === 0){
                return 0
            }
            if (steps === 1){
                return 1
            }
            
            let prev1 = 0;
            let prev2 = 1;
            
            for (let i = 2; i <= steps; i++){
                let current = prev1 + prev2;
                prev1 = prev2;
                prev2 = current
            }
            
            return prev2
            }

*/


 

