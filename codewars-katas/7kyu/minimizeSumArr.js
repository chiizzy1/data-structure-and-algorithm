/*  *****
Challenge: 7kyu Minimize Sum Of Array (Array Series #1)

Instructions: 
The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
minSum({12,6,10,26,3,24}) ==> return (342)

                                     MySolution

            function minSum(arr) {
                arr = arr.sort((a,b) => a - b)
                let sum = 0
                let b = arr.length - 1;
                
                for (let i = 0; i < arr.length/2; i++){
                    sum += arr[i] * arr[b]
                    b--
                }
                return sum
            }
                                CodeWars Solution

            const minSum = arr =>
            arr.sort((a, b) => a - b).reduce((pre, val) => pre + val * arr.pop(), 0);
*/