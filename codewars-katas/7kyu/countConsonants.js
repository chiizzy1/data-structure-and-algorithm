/*  *****
Challenge: 7 kyu  count Consonants

Instructions:  Write a function consonantCount, consonant_count or ConsonantCount that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

                                    MySolution

          function consonantCount(str) {
                let consonant = {a: 1, e: 1, o:1, i: 1, u:1}
                let count = 0;
                let sorted = str.replace(/[^a-zA-Z]/g, '')
                
                for (let i = 0; i < sorted.length; i++){
                    let char = sorted[i];
                    if (!consonant[char]){
                    count++
                    }
                }
                return count
            }

                            Code wars Solution

             const consonantCount = str => str.replace(/[^a-z]|[aeiou]/gi, '').length;    
                    
*/