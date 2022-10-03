/*  *****
Challenge: 5kyu Mean Square Error

Instructions:  

                                 MySolution

            var solution = function(firstArray, secondArray) {
                let l1 = firstArray.length
                let l2 = secondArray.length
                let squaredSum = 0
                if (l1 !== l2){return []}
                else{
                for (let i = 0; i < l1; i++){
                    let a = firstArray[i] - secondArray[i]
                    squaredSum += a * a
                }
                }
                
                return squaredSum / l1
            }
                  
                    Codewars Solution
                    
        const solution = (first, sec) => first.reduce((a, el, i) => a + Math.abs(el - sec[i])**2, 0)/first.length;
            
*/