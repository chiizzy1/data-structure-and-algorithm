/*  *****
Challenge: 6 kyu
Is a number prime?

Instructions:  Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Requirements
You can assume you will be given an integer input.
You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.
Example
is_prime(1)  /* false 
is_prime(2)  /* true  
is_prime(-1) /* false 

                                    MY Solution
                                    
                function isPrime(num) {
                    let count = 0
                    for (let i = 1; i <= num; i++){
                        if (num % i === 0 ){ count += 1 }
                    }
                    return count === 2 ? true : false
                }

                                    CodeWars Solution(1)
            
                    
                            
*/