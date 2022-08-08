/*  *****
Challenge: 5kyu Rot13


Instructions:  ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

                                    MySolution
                     
                            
                    function rot13(str){
                            let message = str.toLowerCase()
                            const alphabet = "abcdefghijklmnopqrstuvwxyz".split('')
                            let ans = ""
                            for (let i = 0; i < message.length; i++){
                                let char = message[i]
                                if ( alphabet.includes(char) ){
                                let index = alphabet.indexOf(char)
                                let newIndex = ( index + 13 ) % 26
                                char === str[i] ? ans += alphabet[newIndex] : ans += alphabet[newIndex].toUpperCase()
                                }
                                else{ ans += char }
                            }
                            
                            return ans
                    }

                                    CodeWar Solution(1)

                    function rot13(message){
                        //your code here
                        return (message + '')
                            .replace(/[a-z]/gi, function(s) {
                            return String.fromCharCode(s.charCodeAt(0) + (s.toLowerCase() < 'n' ? 13 : -13));
                            });

                    }
                                    CodeWar Solution(2)
                
                function rot13(message){
                    const abc = 'abcdefghijklmnopqrstuvwxyz';
                    
                    return [...message].map((i, idx) => {
                        const index = abc.indexOf(i.toLowerCase()) ; 
                        const l = index+13  < 26 ? abc[index+13] : abc[Math.abs(index +13 -26)] ; 
                        return index === -1 ? i : i === i.toUpperCase() ? l.toUpperCase() : l; 
                    }).join('');
                }
*/