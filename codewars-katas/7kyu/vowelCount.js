  /*  *****
Challenge: 7 kyu
Vowel Count

Instructions: Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

                                    MY Solution

                    function getCount(str) {
                        const vowels = 'aeiou'.split('')
                        return str.split('').filter(item => vowels.includes(item)).length
                    }

                                    
                                    CodeWars Solution(1)
                       
              function getCount(str) {
                 return str.replace(/[^aeiou]/gi, '').length;
                }

*/