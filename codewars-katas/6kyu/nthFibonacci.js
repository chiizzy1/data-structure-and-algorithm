/*  *****
Challenge: 6 kyu N-th Fibonacci

Instructions:  I love Fibonacci numbers in general, but I must admit I love some more than others.

I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.

For example:

   nthFibo(4) == 2
Because 2 is the 4th number in the Fibonacci Sequence.

For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.
                            
                        // My Solution

        function nthFibo(n) {
            // Return the n-th number in the Fibonacci Sequence
                    if (n === 1){
                                    return 0
                                }
                        if (n === 2){
                            return 1
                        }
                        
                        let prev1 = 0;
                        let prev2 = 1;
                        
                        for (let i = 3; i <= n; i++){
                            let current = prev1 + prev2;
                            prev1 = prev2;
                            prev2 = current
                        }
                        
                        return prev2
            }

*/