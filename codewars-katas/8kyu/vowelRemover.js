/*  *****
Challenge: 8kyu  Vowel remover

Instructions:  Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"

                                MySolution

                function shortcut (string) {
                    let vowel = {a:1, e:1, i:1, o:1, u:1}
                    let ans = ""
                    
                    for (let char in string){
                        if(!vowel[string[char]]) ans += string[char]
                    }
                    return ans
                }

                                Code wars Solution
                   
                function shortcut(string){
                    return string.replace(/[aeiou]/g,'')
                }
                 
*/