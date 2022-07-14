/*  *****
Challenge: 6 kyu Split Strings


Instructions:  Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']


                                    MY Solution

                      function solution(str){
                            let start = 0;
                            let end = 2;
                            let ans = []
                            
                            for (let i = 0; i < Math.round(str.length / 2); i++){
                                let c = str.slice(start, end)
                                ans.push(c)
                                start += 2
                                end += 2
                            }

                            return ans.map(a => a.length / 2 === 1 ? a : `${a}_`)
                         }
                            
                            
                                    CodeWars Solution(1)
             function solution(str){
                let res = [];
                for (var i = 0; i < str.length; i +=2) res.push(`${str[i] + (str[i+1] || '_')}`)
                return res;
             }
                            
                                    CodeWars Solution(2)
                    function solution(s){
                         return (s+"_").match(/.{2}/g)||[]
                    }
                            
*/