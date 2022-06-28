/*  *****
Challenge: 6kyu Duplicate Encoder

Instructions: DESCRIPTION:
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 


                                            MY Solution
                        function duplicateEncode(word){
                            let char = word.toLowerCase().split('')
                            let uniques = [...new Set (char)]
                            let doubles = []
                            for (let i = 0; i < uniques.length; i++){
                                let each = char.filter(item => item === uniques[i])
                                if (each.length > 1){ doubles.push(uniques[i])}
                            }
                            return char.map(item => doubles.indexOf(item) === -1 ? "(" : ")" ).join('')
                        }
                                        
                                       CodeWars Solution(s)
                                       
                            function duplicateEncode(word){
                                return word
                                .toLowerCase()
                                .split('')
                                .map( function (a, i, w) {
                                return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
                                })
                                .join('');
                            }

*/   


                                    
                                    