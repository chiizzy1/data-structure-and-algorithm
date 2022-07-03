/*  *****
Challenge: 6 kyu
Mexican Wave

Instructions: 

                                       MY Solution
                
                     function wave(str){
                            let word = str.split("")
                            let trimmed = str.trim().split("")
                            let ans = []
                            for (let i = 0 ; i < word.length; i++){
                                let newWord = word.map((letter, index) => index  === i ? word[i].toUpperCase() : letter).join("")
                                ans.push(newWord)
                            }
                             return ans.length !== trimmed.length ? ans.slice(1,-1) : ans
                        }


                                       CodeWars Solution(s)
               
              function wave(str){
                    let newArr = [];
                    for (let i = 0; i < str.length; i++) {
                        let copy = str.split('');
                        if(copy[i] !== ' ') {
                        copy[i] = copy[i].toUpperCase()
                        newArr.push(copy.join(''))
                        }
                    }
                    return newArr
                    }

                        CodeWars Solution(2)
                    const wave = str => 
                        [...str].map((s, i) => 
                            str.slice(0, i) + s.toUpperCase() + str.slice(i + 1) 
                        ).filter(x => x != str);

*/

