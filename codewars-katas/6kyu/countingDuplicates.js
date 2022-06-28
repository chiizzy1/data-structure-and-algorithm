/*  *****
Challenge: 6kyu Counting Duplicates

Instructions: Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice


                                            MY Solution
                          function duplicateCount(text){
                                let str = text.toLowerCase()
                                let uniques = [...new Set(str.split(''))]
                                let doubles = []
                                    for (let i = 0; i < uniques.length; i++){
                                    let each = str.split('').filter(item => item === uniques[i])
                                    if (each.length > 1){ doubles.push(uniques[i])}
                                    }
                                return doubles.length
                            }
                 
                                       CodeWars Solution(s)
                                       
                 const _ = require('lodash');

                function duplicateCount(text) {
                return _(text).countBy(_.toUpper).values().map(x => x > 1).sum();
                }

*/