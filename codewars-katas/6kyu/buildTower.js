/*  *****
Challenge: 6 kyu Build Tower

Instructions:  Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]

                                    MySolution
                    
                 function towerBuilder(x){
                    let arr =[]

                    for (let i = 1; i <= x; i++){
                        let padding = " ".repeat(x - i)
                        let hash = "*".repeat(i*2 - 1)
                        let ans = padding + hash + padding
                        arr.push(ans)
                    }
                    return arr
                }                   

                                    CodeWar Solution

                function towerBuilder(n) {
                    return Array.from({length: n}, function(v, k) {
                        const spaces = ' '.repeat(n - k - 1);
                        return spaces + '*'.repeat(k + k + 1) + spaces;
                    });
                }
*/

