

/*  *****
Challenge: 7kyu Unique Strings

Instructions:  Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false 
                                    MySolution
                                    
                 function solution(str, ending){
                    return ending === "" ? true : str.slice(-1 * ending.length) === ending
                }

                                  CodeWars Solution 
                   
                   function solution(str, ending){
                        return str.endsWith(ending);
                     }
*/