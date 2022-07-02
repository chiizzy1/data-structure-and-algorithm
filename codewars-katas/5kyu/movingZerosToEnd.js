/*  *****
Challenge: 5 kyu Moving Zeros To The End

Instructions: Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

                                       MY Solution
                  function moveZeros(arr) {
                    const  a = arr.filter(item => item !== 0)
                    const  b = arr.filter(item => item === 0)
                    return [...a,...b]
                 }

              

                                       CodeWars Solution(s)
            
                         var moveZeros = function (arr) {
                            return arr.reduceRight(function(prev, curr) {
                                if (curr !== 0) {
                                prev.unshift(curr);
                                }
                                else {
                                prev.push(curr);
                                }
                                return prev;
                            }, []);
                            }
*/

