/*  *****
Challenge: 6kyu  Count characters in your string

Instructions: 


                                    MySolution
                                    
                 function count (string) {  
                        let obj = {}

                        for (let i = 0; i < string.length; i++){
                        obj[string[i]] = obj[string[i]] + 1 || 1
                        }
                    
                    return obj
                }               
                                  CodeWars Solution 

                function count (string) {
                    return string.split('').reduce(function(counts,char){
                    counts[char] = (counts[char]||0) + 1;
                    return counts;
                    },{});
                }
                 
*/