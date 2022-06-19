/*  *****
Challenge: 6kyu Find the missing letter

Instructions: #Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"



                                       MY Solution
      

  function findMissingLetter(array){
                const alphabets = "abcdefghijklmnopqrstuvwxyz".split('')
                const capital = alphabets.map(letter => letter.toUpperCase())
                const arrLastLetter = array.slice(-1).toString()
                const arrFirstLetter = array[0].toString();
                    const checkArr = []
                    let indexFirstLetter
                    let indexLastLetter
                if (capital.includes(array[0])){
                        indexFirstLetter = capital.indexOf(arrFirstLetter) + 1
                        indexLastLetter = capital.indexOf(arrLastLetter) + 1

                        for (let i=indexFirstLetter; i < indexLastLetter; i++){
                            checkArr.push(capital[i])
                        }
                        for (let i=0; i < checkArr.length; i++){
                            if (!array.includes(checkArr[i])){
                            return checkArr[i]
                            }
                        }

                }else{
                        indexFirstLetter = alphabets.indexOf(arrFirstLetter) + 1
                        indexLastLetter = alphabets.indexOf(arrLastLetter) + 1
                        
                        for (let i=indexFirstLetter; i < indexLastLetter; i++){
                            checkArr.push(alphabets[i])
                        }
                        for (let i=0; i < checkArr.length; i++){
                            if (!array.includes(checkArr[i])){
                            return checkArr[i]
                            }
                        }
                }
                }
                                       CodeWars Solution(s)

                                        function findMissingLetter(array) {
  
                const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 
                'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
              
                const isUpperCase = array[0] === array[0].toUpperCase();
              
                let alphaIndex = alphabet.indexOf(array[0].toLowerCase());
                
                let letterPos;
              
                array.forEach(el => {
                  if(el.toLowerCase() !== alphabet[alphaIndex]) {
                    letterPos = alphaIndex;
                  } else {
                    alphaIndex++;
                  }
                });
                  
                return isUpperCase ? alphabet[letterPos].toUpperCase() : alphabet[letterPos];
              }
*/