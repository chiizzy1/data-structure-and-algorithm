/*  *****
Challenge: 6kyu Find The Parity Outlier

Instructions: You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)


                                            MY Solution
                          
                    function findOutlier(integers){
                        const odd =  integers.filter(num => num % 2 != 0)
                        const even = integers.filter(num => num % 2 === 0)
                        return odd.length === 1 ? odd[0] : even[0]
                    }
                                       CodeWars Solution(s)
                                       
                    function findOutlier(ints) {
                        return ints.slice(0, 3).reduce((a, b) => b % 2 === 0? a : a + 1, 0) >= 2?
                        ints.find(i => i % 2 === 0) : ints.find(i => i % 2 !== 0);
                    }

*/