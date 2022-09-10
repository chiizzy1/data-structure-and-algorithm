/*  *****
Challenge: 8kyu  Count of positives / sum of negatives

Instructions: Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]

                                MySolution

            function countPositivesSumNegatives(input) {
                let a = 0
                let b = 0
                
                if ( input == null || input.length == 0 || !input){return [] }
                for (let i = 0; i < input.length; i++){
                    let num = input[i]
                    if (num > 0){a ++}
                    if (num < 0) {b += num}
                }
                return [a, b]
            }

                                
*/