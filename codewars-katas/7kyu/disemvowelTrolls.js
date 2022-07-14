 /*  *****
Challenge: 7 kyu  Disemvowel Trolls

Instructions:  Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.


                                    MY Solution

                            function disemvowel(str) {
                                const vowels = 'aeiou'.split('')
                                const capVowels = 'AEIOU'.split('')
                                str = str.split(' ')
                                let ans = []
                                
                                for (let i = 0; i < str.length; i++){
                                    let filtered = str[i].split('').filter(a => !vowels.includes(a))
                                    let final = filtered.filter(a => !capVowels.includes(a)).join('')
                                    ans.push(final)
                                }
                                
                                return ans.join(' ')
                            }
                            
                            
                                    CodeWars Solution(1)

                            function disemvowel(str) {
                                    return str.replace(/[aeiou]/gi, '');
                                 }

                                    CodeWars Solution(2)
        
                            function disemvowel(str) {
                                var vowels = ['a', 'e', 'i', 'o', 'u'];
                                
                                return str.split('').filter(function(el) {
                                    return vowels.indexOf(el.toLowerCase()) == -1;
                                }).join('');
                            }
                            
*/