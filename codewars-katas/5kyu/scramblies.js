  /*  *****
Challenge: 5 kyu Scramblies


Instructions: Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
              

                                    MY Solution

                function scramble(a, b){
                    a = a.toLowerCase().split('')
                    b = b.toLowerCase().split('')
                    let uniques = [...new Set(b)]

                    if (uniques.every (i => a.indexOf(i) !== -1)){
                        return uniques.every(word => a.filter(letter => letter === word).length >= b.filter(letter => letter === word).length )
                    }
                    else{ return false }
                }

                                    
                                    CodeWars Solution(1)
                       
                function scramble(str1, str2) {
                    return str2.split('').every((x,i) => {
                        return str1.split(x).length >= str2.split(x).length
                    })
                }

*/