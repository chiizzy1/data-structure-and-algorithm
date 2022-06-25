/*  *****
Challenge: 7kyu Consecutive items

Instructions: You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

It is guaranteed that a and b are both present in arr.

                                       MY Solution
                  
                function consecutive(arr, a, b) {
                    let newArr = arr.filter((num, index) => num === a && (arr[index-1] === b || arr[index + 1] === b))
                    return newArr.length >= 1
                }
                                       CodeWars Solution(s)
        
             function consecutive(arr, a, b) {
                 return Math.abs(arr.indexOf(a) - arr.indexOf(b)) == 1;
                }
*/

