/*  *****
Challenge: 6 kyu
Highest Scoring Word

Instructions: 

                                       MY Solution
                
                        function high(x){
                            let arr = x.split(' ')
                            const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('')
                            let sums = []
                            for (let i = 0; i < arr.length; i++){
                                let counter = 0
                                arr[i].split('').map(letter => counter += alphabets.indexOf(letter) + 1)
                                sums.push(counter)
                            }
                            return arr[sums.indexOf(Math.max(...sums))]
                        }

                                       CodeWars Solution(s)
                function high(s){
                let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
                return s.split(' ')[as.indexOf(Math.max(...as))];
                }
        
*/

