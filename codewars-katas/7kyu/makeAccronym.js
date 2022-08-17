/*  *****
Challenge: 7kyu Make acronym


Instructions: Write function which takes a string and make an acronym of it.

split string to words by space char
take every first letter from word in given string
uppercase it
join them together
Eg:

Code wars -> C, w -> C W -> CW

                                    MySolution
                     
                  function toAcronym(inp){
  return inp.split(' ').map(word => word[0].toUpperCase()).join('')
}

                                CodeWar Solution
                
                    
                function toAcronym( input ){
  return input.replace(/(\w).*?\b[^\w]*/g,"$1").toUpperCase()
}

*/