/*  *****
Challenge: 7 kyu Greatest common divisor

Instructions: 
Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.


                                       MY Solution
        
        function mygcd(x,y){
            let min = Math.min(x, y)
            
            let arr = [];
            
            for (let i = 1; i <= min; i++){
                if (x%i === 0 && y % i === 0){
                    arr.push(i)
                }
            };
            
            return arr[arr.length -  1]
        }

                                       CodeWars Solution(s)

            // Using Recurssion function
        function mygcd(a, b) {
            if (b === 0) {
                return a;
            }
            return mygcd(b, a % b);
        };


*/