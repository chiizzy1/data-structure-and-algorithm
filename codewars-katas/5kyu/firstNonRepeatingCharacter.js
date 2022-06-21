  /*  *****
Challenge:

Instructions:
              

                                       MY Solution
                function firstNonRepeatingLetter(s) {
                    let arr = s.split('')
                    let all = arr.map(item => item.toLowerCase())
                    let uniques = [...new Set(all)] 
                    let singles = []
                    for (let i = 0; i < uniques.length; i++){
                        let ans = all.filter( item => item === uniques[i])
                            if (ans.length === 1){
                            singles.push(uniques[i])
                        }  
                    }
                    if (singles.length === 0){
                        return ''
                    }else{
                        return s.includes(singles[0])  ? singles[0] : singles[0].toUpperCase()
                    }
                }
                                       CodeWars Solution(1)
                        function firstNonRepeatingLetter(s) {
                            let str = s.toLowerCase();
                            for(let i = 0; i < str.length; i++) {
                                if(str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
                                return s[i];
                                }
                            }
                            return "";
                            }

                            CodeWars Solution(2)

                            function firstNonRepeatingLetter(s) {
                                var search = s.toLowerCase();
                                
                                for (var i = 0; i < search.length; ++i) {
                                    var str = search.slice(0, i) + search.slice(i + 1);
                                    if((str.indexOf(search[i]) === -1)) {
                                        return s[i];
                                    }
                                }
                                return '';
                            }

                            CodeWars Solution(3)

                            function firstNonRepeatingLetter(s) {
                                 return s[s.toLowerCase().split('').findIndex(letter => s.toLowerCase().split('').filter(l => l === letter).length === 1 )] || '';
                            }
*/