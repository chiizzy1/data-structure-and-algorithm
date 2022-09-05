/*  *****
Challenge: 7 kyu
Remove duplicate words

Instructions:  Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'

                                    MySolution

              function removeDuplicateWords (s) {
                return [...new Set (s.split(' '))].join(' ')
            }                      
                                
                   
                   
*/