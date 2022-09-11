/*  *****
Challenge: 8kyu  Filling an array (part 1)

Instructions: We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:

arr(5) // => [0,1,2,3,4]

                                MySolution

                function arr(n){
                    var newArr = [];
                    for(var i = 0; i < n; i++){
                        newArr.push(i);
                    }
                    return newArr;
                }
                        
                            
*/