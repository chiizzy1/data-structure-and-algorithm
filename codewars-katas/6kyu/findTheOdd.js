/*  *****
Challenge: 6kyu Find the odd int

Instructions: Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).


                                       MY Solution
                  
                             function findOdd(A) {
                                let uniques = [...new Set (A)];
                                for (let i = 0; i < uniques.length; i++){
                                    let num = A.filter(a => a === uniques[i])
                                    if (num.length % 2 != 0){
                                        return uniques[i]
                                    }
                                }
                            }
                                       CodeWars Solution(s)
                   // Cool one liner using ES6
const findOdd = A => A.filter(x => A.filter(v => x === v).length % 2 === 1).reduce(a => a);              
                               
*/