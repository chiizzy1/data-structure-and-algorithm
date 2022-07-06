/*  *****
Challenge: 7 kyu
Shortest Word

Instructions: Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.

                                       MY Solution

                        function findShort(s){
                            return Math.min(...s.split(' ').map(word => word.length))
                        }

                                       CodeWars Solution(s)
                   const findShort = (s) => s
                        .split(' ')
                        .sort((a, b) => b.length - a.length)
                        .pop()
                        .length;
                               
*/

