/*  *****
Challenge: 8 kyu
Do I get a bonus?

Instructions:  If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

                                    MySolution
                function bonusTime(salary, bonus) {
                  return bonus ? `£${salary * 10}` : `£${salary}`
                }

                                    Code Wars Solution(1)
               function bonusTime(salary, bonus) {
                    return '£' + salary * (bonus ? 10 : 1);
                    }
*/