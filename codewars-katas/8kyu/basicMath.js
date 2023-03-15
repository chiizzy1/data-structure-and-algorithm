

/*  *****
Challenge: 8 kyu  basic Maths

Instructions: The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7


                               My Solution
                 function basicOp(operation, value1, value2)
                    {
                    return operation == '*' ? value1 * value2 : operation === '-' ? value1 - value2 : operation === '+' ? value1 + value2 : value1 / value2
                    }                   
             
                        CodeWars Solution 1

                    function basicOp(operation, value1, value2)
                        {
                        var cases = {
                            '+': value1 + value2,
                            '-': value1 - value2,
                            '*': value1 * value2,
                            '/': value1 / value2
                        };
                        return cases[operation]
                    }

                        CodeWars Solution2
                   
                   function basicOp(operation, value1, value2)
                    {
                    return eval(value1 + operation + value2);
                    }         
*/