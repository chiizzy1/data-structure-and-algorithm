/*  *****
Challenge: Easy  70. Climbing Stairs

Instructions:  You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

                                MY Solution

           var climbStairs = function(n) {
                let steps = [];
                steps[1] = 1;
                steps[2] = 2
                
                for (let i = 3; i <= n; i++){
                    steps[i] = steps[i-1] + steps[i-2];
                }
                
                return steps[n]
            };

                    // Better Optimized Solution

            var climbStairs = function(n) {
                if (n == 1 || n == 0) return 1 // our base cases
                
                let prev1 = 1;
                let prev2 = 2;

                for (let i = 3; i <= n; i++) {
                    let current = prev1 + prev2;
                    prev1 = prev2;
                    prev2 = current;
                }
                return prev2;
            };

*/


 