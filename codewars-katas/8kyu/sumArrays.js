/*  *****
Challenge: 8 kyu
Sum Arrays

Instructions: Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any 
numbers then you should return 0.

                                    MY Solution
                            function sum (numbers) {
                                 return numbers.reduce((a,b)=> a + b , 0)
                           };
                                                            
                                    CodeWars Solution(1)

                           const sum = numbers => numbers.reduce((sum, number) => sum += number, 0);
                            
*/
