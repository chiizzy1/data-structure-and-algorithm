/*  *****
Challenge: 8kyu  To square(root) or not to square(root)

Instructions:  Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]

                                MySolution
            function squareOrSquareRoot(array) {
                let ans = []
                
                for (let i = 0; i < array.length; i++){
                    let num = parseInt(Math.sqrt(array[i]))
                    array[i] === num * num ? ans.push(num)  : ans.push(array[i] * array[i]) 
                }
                return ans
            }
                                
*/