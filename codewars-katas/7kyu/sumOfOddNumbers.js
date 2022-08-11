/*  *****
Challenge: 8kyu  Sum of odd numbers


Instructions:  Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8

                                    MySolution
                     
                   function rowSumOddNumbers(n) {
                        return Math.pow(n, 3);
                    }
        
                    CodeWar Solution

                    function rowSumOddNumbers(n) {
                        var first = (n*(n-1)) + 1;
                        var result = 0;
                        for (i = 0; i < n; i++) {
                            result += first;
                            first += 2;
                        }
                        return result;
                    }

*/