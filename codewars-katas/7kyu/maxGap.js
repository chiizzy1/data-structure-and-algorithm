/*  *****
Challenge: 7 kyu Maximum Gap (Array Series #4)

Instructions:  Examples
maxGap ({13,10,5,2,9}) ==> return (4)
Explanation:
The Maximum Gap after sorting the array is 4 , The difference between 9 - 5 = 4


                                    MySolution
               function maxGap (numbers){
                    numbers = numbers.sort((a,b) => a - b)
                    let diff = 0
                    
                    for (let i = 1; i < numbers.length; i++){
                        let prev = numbers[i-1]
                        let curr = numbers[i]
                        if (curr - prev > diff){
                        diff = curr - prev
                        }
                    }
                    return diff
                    
                }
*/