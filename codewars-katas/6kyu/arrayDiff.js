/*  *****
Challenge: 6 kyu Array.diff

Instructions: Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
              

                                       MY Solution

                            function arrayDiff(a, b) {
                                let arr
                                let sort
                                    for (let i=0; i < b.length; i++){
                                    sort = a.filter(num => num !== b[i])
                                    arr = a.filter(num => num === b[i])
                                    a = sort.concat(arr).splice(0, a.length - arr.length)
                                    }
                                
                                return a
                             }  
                                      
                                       CodeWars Solution(s)

                        function array_diff(a, b) {
                            return a.filter(e => !b.includes(e));
                        }
                                       

                        CodeWars Solution(2)

                        function array_diff(a, b) {
                                b = new Set(b)
                                return a.filter(v => !b.has(v))
                        }


                        CodeWars Solution(3)

                        function array_diff(a, b) {
                            return a.filter(x => b.indexOf(x) == -1);
                        }

*/