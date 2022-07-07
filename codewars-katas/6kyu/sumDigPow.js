/*  *****
Challenge: 6 kyu
Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!

Instructions: The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

In effect: 89 = 8^1 + 9^2

The next number in having this property is 135.

See this property again: 135 = 1^1 + 3^2 + 5^3

We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

Let's see some cases:

sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]

sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
If there are no numbers of this kind in the range [a, b] the function should output an empty list.

sumDigPow(90, 100) == []


                                       MY Solution

                           function sumDigPow(a, b) {
                                let arr = []
                                for (let i = a; i <= b; i++){ 
                                    let spread = [i]
                                    let ans = spread.map(num => Array.from(String(num), a => Number(a)).map( (a, i) => Math.pow(a, i + 1) ).reduce ((acc, val) => acc + val) )
                                    if (Number(ans) === i ){ arr.push(Number(ans)) }
                                }
                                return arr
                            }
                   

                                       CodeWars Solution(s)

            function sumDigPow(a, b) {
                let result_arr = [];
                for (let i = a; i < b + 1; i++) {
                    let result = 0;
                    let string = i.toString();
                    for (let k = 0; k < string.length + 1; k ++){
                        result = result +  Math.pow(string.charAt(k), k + 1);
                    }
                    if (result === i ){
                        result_arr.push(result);
                        }
                    }   
                
                return result_arr;
            }                              

*/