/*  *****
Challenge: 7 kyu
Sum of Array Averages

Instructions: Program a function sumAverage(arr) where arr is an array containing arrays full of numbers, for example:

sumAverage([[1, 2, 2, 1], [2, 2, 2, 1]]);
First, determine the average of each array. Then, return the sum of all the averages.

All numbers will be less than 100 and greater than -100.
arr will contain a maximum of 50 arrays.
After calculating all the averages, add them all together, then round down, as shown in the example below:
The example given: sumAverage([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]]), the answer being 44.
              

                                       MY Solution

            const sumAverage = (arr) => {
            const newArr = arr.map(array => array.reduce((acc, val)=> acc + val) / array.length)
            return Math.floor(newArr.reduce((acc, val)=> acc + val))
            }
               
                                       CodeWars Solution(s)
            const sumAverage = arr =>
            Math.floor(arr.reduce((pre, val) => pre + val.reduce((p, v) => p + v) / val.length, 0));

*/
