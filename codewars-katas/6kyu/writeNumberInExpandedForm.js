
// Challenge: 6 kyu
// Write Number in Expanded Form

// Instructions: You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

                                    //    MY Solution
                
                        function expandedForm(a){
                            let arr = [...String(a)]
                            let ans = []

                            for (let i = 0 ; i < arr.length; i++){
                                ans.push( arr.map((num, index) => index === i ? num : '0').join(''))
                            }

                            let all = ans.map((str, index) => str.slice(index))
                            return all.filter(str => ![...str].every(a => a === '0') && str ).join(' + ')
                        }
                   
                                    //    CodeWars Solution(s)
               
                      const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");

                            //  CodeWars Solution(2)

                            function expandedForm(num) {
                                return String(num)
                                        .split("")
                                        .map((num, index, arr) => num + "0".repeat(arr.length - index -1 ))
                                        .filter((num) => Number(num) != 0)
                                        .join(" + ")
                              }
                              
                              
                        



