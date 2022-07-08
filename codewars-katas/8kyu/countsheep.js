  /*  *****
Challenge: 8 kyu
Counting sheep...

Instructions: Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

                                    MY Solution

              function countSheeps(arrayOfSheep) {
                    let count = 0
                    arrayOfSheep.forEach(item => item === true ? count += 1 : count)
                    return count
                }

                                    
                                    CodeWars Solution(1)
                       
               function countSheeps(arrayOfSheeps) {
                 return arrayOfSheeps.filter(Boolean).length;
                }

*/