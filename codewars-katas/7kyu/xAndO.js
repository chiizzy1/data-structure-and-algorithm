/*  *****
Challenge: 7 kyu Exes and Ohs


Instructions:  Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false


                                    MY Solution
                            
                            function XO(str) {
                                const check = 'ox'.split('')
                                let a = str.split('').filter(a => a.toLowerCase() === 'o')
                                let b = str.split('').filter(b => b.toLowerCase() === 'x')
                                return a.length === b.length
                            }

                                    CodeWars Solution(1)
             function XO(str) {
                str = str.toLowerCase();
                return (str.match(/o/g) || []).length === (str.match(/x/g) || []).length;
            }
                    
                            
*/