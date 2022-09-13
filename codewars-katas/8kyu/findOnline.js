/*  *****
Challenge: 8kyu  Find numbers which are divisible by given number

Instructions:  Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

Example(Input1, Input2 --> Output)
[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

                                    MySolution

                function divisibleBy(numbers, divisor){
                    return numbers.filter(num => num % divisor === 0)
                }
                
*/