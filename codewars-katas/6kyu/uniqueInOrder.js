/*  *****
Challenge: 6kyu Unique In Order

Instructions: Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

                                       MY Solution

               var uniqueInOrder=function(iterable){
                    //your code here - remember iterable can be a string or an array
                    let arr 
                    let ans = []
                    Array.isArray(iterable) ? arr =  iterable :  arr = iterable.split('')
                    
                    for (let i = 0 ; i < arr.length; i++){
                        if (arr[i] != arr[i + 1]) ans.push(arr[i])
                    }
                    return ans
                }

                                       CodeWars Solution(s)

                var uniqueInOrder=function(iterable){
                    return [...iterable].filter((a, i) => a !== iterable[i-1])
                }

                               
*/

