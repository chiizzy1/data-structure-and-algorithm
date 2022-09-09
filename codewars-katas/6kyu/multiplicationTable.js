/*  *****
Challenge: 6kyu  Multiplication table

Instructions:  Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

                                MySolution
                let multiplicationTable = function(size) {
                    let ans = []
                    
                    for (let i = 1; i <= size; i++){
                        
                        let count = 0
                        let eachI = []
                        for (let a = 1; a <= size; a++){
                        eachI.push( i + count ) 
                        count += i
                        }
                        
                        ans.push(eachI)
                    }
                    
                    return ans
                }

                
                            CodeWar Solution

                multiplicationTable = function(size) {
                    var result = [];

                    for (var i = 0; i < size; i++) {
                        result[i] = [];
                        for(var j = 0; j < size; j++) {
                        result[i][j] = (i + 1) * (j + 1);
                        }
                    }
                    
                    return result
                }
                    
*/