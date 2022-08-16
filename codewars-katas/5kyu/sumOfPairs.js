/*  *****
Challenge: 5 kyu

Instructions: 

                                    MY Solution

              function sumPairs(ints, s) {
                    let obj = {}
                    
                    for ( let i = 0; i < ints.length; i++ ){
                        let num1 = ints[i]
                        let num2 = s - num1
                        
                    //     obj[num1] = ints.indexOf(num1)
                        
                        if ( obj[num2] !== undefined ){
                        return [num2, num1]
                        }
                        
                        if ( obj[num2] === undefined ){
                        obj[num1] = i
                        }
                        
                    }
                    return  undefined ;
                }


                                CodeWars Solution(1)

                                
                function sum_pairs (ints, s) {

                    // This object will keep track of the numbers seen and their first indexes
                    // For an array like [42, 5, 5, 7] we will get { '42': 0, '5': 1, '7': 3 }
                    const numbersSeen = {};

                    for (let i = 0; i < ints.length; i += 1) {
                        // For every number...
                        const currentNumber = ints[i];
                        // Find the pair it needs to add up to "s"
                        const pair = s - currentNumber;

                        // If we've seen the pair before, we have our best set of numbers!
                        if (numbersSeen[pair] !== undefined) {
                        return [ pair, currentNumber ];
                        }

                        // Otherwise save this number's index if we haven't seen it before
                        if (numbersSeen[currentNumber] === undefined) {
                        numbersSeen[currentNumber] = i;
                        }
                    }

                    // Return "null" if we find nothing after our loop
                    return null;

                }


                                CodeWars Solution(1)

                   var sumPairs = function(ints, s) {
                        set = new Set();
                        
                        for (let i of ints) {
                        if (set.has(s - i)) {
                            return [ s - i, i ];
                        }
                        
                        set.add(i);
                        }
                    }

*/

