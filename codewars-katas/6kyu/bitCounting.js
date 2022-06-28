/*  *****
Challenge: 6kyu Bit Counting

Instructions: Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case


                                       MY Solution
                     var countBits = function(n) {
                        return n.toString(2).split('').filter(num => num === '1').length
                    }
                            
                                       CodeWars Solution(s)
                      var countBits = function(n) {
                        return n !== 0 ? n.toString(2).match(/1/g).length:0;
                        };
*/