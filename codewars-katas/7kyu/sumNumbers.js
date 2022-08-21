/*  *****
Challenge: 7 kyu
Beginner Series #3 Sum of Numbers

Instructions:   Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

                                    MySolution
   
                function getSum( a,b )
                    {  let c = a
                    if ( a > b ){
                        a = b
                        b = c
                    }
                    let count  = 0
                    for ( let i = a; i <= b; i++ ){
                        count += i
                    }
                    return count
                }

                                  CodeWars Solution 2
                   
              function GetSum(a,b)
                {
                return (Math.abs(a - b) + 1) * (a+b) / 2;
                }


                                CodeWars Solution 1
                    function GetSum( a,b )
                        {
                        var sum=0;
                        while(a!== b){
                            sum+= a<b?a++:b++;
                        }
                        return sum+a;
                    }

                    
              
               
               
*/