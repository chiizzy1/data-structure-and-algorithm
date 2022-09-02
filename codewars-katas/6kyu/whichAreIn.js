/*  *****
Challenge: 6kyu  Which are in?

Instructions:  Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

                                    MySolution
                      
                function inArray(array1,array2){
                    array2 = array2.join(' ')
                    let r = []
                    
                    for(let i = 0; i < array1.length; i++){
                        if (array2.includes(array1[i])){
                        r.push(array1[i])
                        }
                    }
                    return r.sort()
                }
                                CodeWar Solution
                                
                function inArray(array1,array2){
                    return array1
                        .filter(a1 => array2.find(a2 => a2.match(a1)))
                        .sort()
                }
                
*/