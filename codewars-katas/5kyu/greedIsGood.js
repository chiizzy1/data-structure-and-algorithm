/*  *****
Challenge: 5 kyu

Instructions: Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)


                                    MY Solution

                    function score( dice ) {
                        let count = 0
                        let obj = {}
                        
                        const value = {
                            1: 1000, 2: 200, 3: 300, 4: 400, 5: 500, 6: 600
                        }
                        
                        for (let i = 0; i < dice.length; i++ ){
                            let num = dice[i]
                            obj[num] = obj[num] + 1 || 1
                            
                            if( obj[num] === 3 ){ 
                            count += value[num]
                            obj[num] = 0
                            }
                        }
                        
                        while( obj[1] > 0 &&  obj[1] < 3 ){ 
                            count += 100
                            obj[1]--
                            }
                        
                        while( obj[5] > 0 &&  obj[5] < 3 ){ 
                            count += 50
                            obj[5]--
                            }
                        
                        return count
                    }


                    
                                CodeWars Solution(1)

                     function score(dice) {
                        var threes = [0, 1000, 200, 300, 400, 500, 600],
                            ones = [0, 100, 0, 0, 0, 50, 0],
                            dices = {},
                            sum = 0;  
                            
                        dice.forEach(function(v) { dices[v] = dices[v] ? dices[v] + 1 : 1; });
                        for (var i = 1; i < 7; ++i) {
                            if (!dices[i]) {
                            continue;      
                            }
                            
                            if (dices[i] >= 3) {
                            sum += threes[i];
                            dices[i] -= 3;
                            }
                            sum += ones[i]*dices[i];
                        }
                        
                        return sum;
                    }

                


                                CodeWars Solution(1)

                   function score( dice ) {
                    var v = {
                        111: 1000,
                        222: 200,
                        333: 300,
                        444: 400,
                        555: 500,
                        666: 600,
                        1: 100,
                        5: 50
                    };
                    
                    var s = dice.sort().join('').match(/(([1-6])\2\2)|(1|5)/g) || [];
                    return s.reduce(function (a, e) {
                        return a + v[e];
                    }, 0);

                }


*/

