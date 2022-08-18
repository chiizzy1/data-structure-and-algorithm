
/*  *****
Challenge: 6 kyu
Delete occurrences of an element if it occurs more than n times


Instructions:  Enough is enough!
Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, 
and now they want to show Charlie their entire collection. However, Charlie doesn't like these
sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

Task
Given a list and a number, create a new list that contains each number of list at most N times,
without reordering.
For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], 
you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result
 3 times, and then take 3, which leads to [1,2,3,1,2,3].
With list [20,37,20,21] and number 1, the result would be [20,37,21].


                                    MySolution
                    function  deleteNth(arr,n){
                            let ans = []

                            for (let i = 0; i < arr.length; i++){
                                let num = arr[i]
                                let check = ans.filter( a => a === num).length
                                if (check < n){ ans.push(num) }
                            }

                            return ans
                     }


                            My Optimized Solution

                    function deleteNth(arr,n){
                        let obj = {}
                        
                        return arr.filter( num => {
                            obj[num] = obj[num] + 1 || 1
                            return obj[num] <= n
                        })
                        
                    }



                                    CodeWar Solution
                function deleteNth(arr,x){
                    var obj = {}
                    return arr.filter(function(number){
                        obj[number] = obj[number] ? obj[number] + 1 : 1
                        return obj[number] <= x
                    })
                }
*/