/*  *****
Challenge: 6 kyu Sort the odd

Instructions:

                                       MY Solution


                      function sortArray(arr) {
                            let odd = num => num % 2 !== 0
                            let  p = arr.filter(odd).sort()
                            
                            return arr.map( num => num % 2 !== 0 ? p.shift() : num )
                        }

                                       CodeWars Solution(s)

                function sortArray(array) {
                    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
                    return array.map((x) => x % 2 ? odd.shift() : x);
                }

*/

