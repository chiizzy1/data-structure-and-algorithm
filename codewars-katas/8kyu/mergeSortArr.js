 /*  *****
Challenge: 8 kyu
Merge two sorted arrays into one

Instructions: * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

                                    MY Solution

             function mergeArrays(arr1, arr2) {
                return [...new Set ([...arr1, ...arr2])].sort((a, b) => a - b)
                }
                                    
                                    CodeWars Solution(1)
                const mergeArrays = (a, b) => Array.from(new Set(a.concat(b))).sort((a, b) => a - b);       
            

*/