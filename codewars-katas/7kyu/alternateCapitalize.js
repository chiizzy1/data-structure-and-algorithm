/*  *****
Challenge: 7 kyu  

Instructions:  Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

                                    MySolution

            function capitalize(s){
                let l = s.length
                let even = "";
                let odd = "";
                
                for (let i = 0; i < s.length; i++){
                    i % 2 === 0 ? even += s[i].toUpperCase() : even += s[i].toLowerCase()
                    
                    i % 2 !== 0 ? odd += s[i].toUpperCase() : odd += s[i].toLowerCase() 
                }
                return [even, odd]
            };

                                 Code wars Solution
                   
                const capitalize = s => {
                    const arr = s.split('');
                    let a = '', b = '';
                    
                    for (let i = 0; i < arr.length; i++) {
                    if (i % 2) {
                        a += arr[i];
                        b += arr[i].toUpperCase();
                    } else {
                        a += arr[i].toUpperCase();
                        b += arr[i];
                    }
                    }
                    
                    return [a, b];
                };

                            Code wars Solution

            function capitalize(s) {
                return s.split('').reduce((acc, val, i) => {
                    acc[0] += i % 2 === 0 ? val.toUpperCase() : val.toLowerCase();
                    acc[1] += i % 2 === 0 ? val.toLowerCase() : val.toUpperCase();
                    return acc;
                }, ['', '']);
            };        
                    
*/