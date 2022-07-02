/*  *****
Challenge: 5kyu Simple Pig Latin

Instructions: Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

                                       MY Solution

                function pigIt(str){
                  return str.split(' ').map(([initial, ...rest]) =>[...rest, /[.,:!?]/.test(initial.charAt(initial.length-1)) ? initial :`${initial}ay`].join("")).join(' ') 
                }

                                       CodeWars Solution(s)
                   function pigIt(str){
                    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
                    }
               
                    CodeWars Solution(2)

                    function pigIt(str){
  return str.split(" ").map( (item) => `${item.substr(1)}${item[0]}ay` ).join(" ")
}

                               
*/

