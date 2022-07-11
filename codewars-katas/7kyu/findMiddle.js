 /*  *****
Challenge: 7 kyu
Find the middle element

Instructions: As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

                                    MY Solution

                        function gimme (triplet) {
                            const a = [...triplet]
                            let b = triplet.sort((a,b) => a-b)
                            let mid = b[1]
                            return a.indexOf(mid)
                        }
                                    
                                    CodeWars Solution(1)

                            const gimme = function (arr) {
                                return arr.indexOf([...arr].sort((x, y) => x > y)[1]);
                            };
                            
*/


function compareVersions (version1, version2) {

    let a = version1.split('.')
    let b = version2.split('.')

    if ( a.length > b.length){ return a[b.length - 1] >= b[b.length - 1]  }
    if ( a.length < b.length){ return a[a.length - 1] >= b[a.length - 1]  }
    else{
        return a.every((num, index) => parseFloat(num) >= parseFloat(b[index]) )
    }
}
  
  parseFloat(version1) >= parseFloat(version2);
  compareVersions ("10.9", "10.10");  