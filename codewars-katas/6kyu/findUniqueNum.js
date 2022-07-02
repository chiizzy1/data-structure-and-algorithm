/*  *****
Challenge: 6 kyu Find the unique number

Instructions: There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.



                                       MY Solution

                function findUniq(arr) {
                    let uiques = [...new Set(arr)]
                    for (let i = 0 ; i < uiques.length; i++){
                        if (arr.filter(num => num === uiques[i]).length === 1){
                        return uiques[i]
                        } 
                    }
                }

                                       CodeWars Solution(s)
            
            function findUniq(arr) {
                return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
                }
*/

