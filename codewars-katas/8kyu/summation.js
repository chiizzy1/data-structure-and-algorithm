

/*  *****
Challenge: easy Two Sum

Instructions:  summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

                                    MY Solution
                        
            var summation = function (num) {
                let count = 0
                for ( let i = 0; i <= num; i++ ){
                count = count + i
                }
                return count
            }


                                 leetCode Solution(1)
                        function summation(num) {
                            return num * (num + 1) / 2
                        }
                            
*/