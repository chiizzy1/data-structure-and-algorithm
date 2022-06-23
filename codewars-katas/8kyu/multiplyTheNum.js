

  /*  *****
Challenge: 8 kyu
Multiply the number

Instructions: Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

multiply(3)==15 // 3 * 5¹
multiply(10)==250 // 10 * 5²
multiply(200)==25000 // 200 * 5³
multiply(0)==0 // 0 * 5¹
multiply(-3)==-15 // -3 * 5¹

                                       MY Solution
                  function multiply(number){
                        const arr = number.toString().split('').filter(num => num != '-')
                        return number * 5**arr.length
                    }
                                CodeWars Solution(s)  
                                function multiply(number) {
                                  return number * Math.pow(5, Math.abs(number).toString().length);
                                }                            
*/
