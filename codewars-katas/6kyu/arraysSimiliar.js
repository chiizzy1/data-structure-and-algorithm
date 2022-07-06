

/*  *****
Challenge: 6 kyu
Arrays Similar

Instructions: Write a function that determines whether the passed in arrays are similar. Similar means they contain the same elements, and the same number of occurrences of elements.

const arr1 = [1, 2, 2, 3, 4],
      arr2 = [2, 1, 2, 4, 3],
      arr3 = [1, 2, 3, 4],
      arr4 = [1, 2, 3, "4"]

arraysSimilar(arr1, arr2); // Should equal true
arraysSimilar(arr2, arr3); // Should equal false
arraysSimilar(arr3, arr4); // Should equal false

                                       MY Solution

                        function arraysSimilar(a, b) {
                            a = a.sort()
                            b =  b.sort()
                            if (a.join() === b.join()){
                                return a.every((num, index) => num === b[index])
                            }
                            else{ return false }
                        }

                         CodeWars Solution(s)
                         
                        function arraysSimilar(arr1, arr2) {
                            let reducer = (accumulator, currentValue) => accumulator + currentValue
                            return arr1.reduce(reducer) === arr2.reduce(reducer)
                        }
                                      
                    CodeWars Solution(2)

                   function arraysSimilar(arr1, arr2) {
                        return JSON.stringify(arr1.slice().sort()) === JSON.stringify(arr2.slice().sort());
                    }
                                                
*/

