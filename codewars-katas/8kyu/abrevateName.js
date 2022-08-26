/*  *****
Challenge: 8kyu  Abbreviate a Two Word Name

Instructions:   Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F


                                    MySolution
                    function abbrevName(name){
                        name = name.split(' ')
                        return name.map( initial => initial[0].toUpperCase() ).join('.')
                    }                
               
                                  CodeWars Solution 
                   const abbrevName = name => name.match(/\b\w/g).join('.').toUpperCase()
                   
*/