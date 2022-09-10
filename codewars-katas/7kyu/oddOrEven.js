/*  *****
Challenge: 7kyu  Odd or Even?

Instructions: Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

                                MySolution

            function oddOrEven(array) {
                if (array.length == 0 ){ return "even"}
                let count = array.reduce((a,b) => a + b)
                return count % 2 === 0 ? "even" : "odd"
            }
                                
*/