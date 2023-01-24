/*  *****
Challenge: 6 kyu N-th Fibonacci

Instructions:  I love Fibonacci numbers in general, but I must admit I love some more than others.

I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.

For example:

   nthFibo(4) == 2
Because 2 is the 4th number in the Fibonacci Sequence.

For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.
                            
                        // My Solution
                        
            export function nthFibo(n: number): number {
                if (n === 0) { return 0}
                if (n === 1){ return 0}
                if (n === 2){ return 1}
                let fibo = [0,1];
                
                for (let i = 3; i <= n; i++){
                    let sum = fibo[fibo.length - 1] + fibo[fibo.length - 2];
                    fibo.push(sum)
                }
                return fibo[fibo.length - 1];
            }

                                CodeWar Solutions
                export function nthFibo(n: number): number {
                    return n < 3 ? n - 1 : nthFibo(n - 1) + nthFibo(n - 2)
                }

*/