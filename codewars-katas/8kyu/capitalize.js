/*  *****
Challenge: 8kyu  Capitalization and Mutability

Instructions: 

                                    MySolution
                      
                function capitalizeWord(word) {
                 return word[0].toUpperCase() + word.slice(1)
                }     

                                CodeWar Solution
                                
                const capitalizeWord = (word) => word.replace(word.charAt(0), word.charAt(0).toUpperCase());

*/