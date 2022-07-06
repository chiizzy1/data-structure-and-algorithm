/*  *****
Challenge: 6 kyu
Convert string to camel case

Instructions: Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

                                       MY Solution

               function toCamelCase(str){
                    str = str.split('-').join(' ')
                    let arr = str.split('_').join(' ')
                    return arr.split(' ').map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)).join('')
                }

                                       CodeWars Solution(s)
                         function toCamelCase(str){
                            var regExp=/[-_]\w/ig;
                            return str.replace(regExp,function(match){
                                    return match.charAt(1).toUpperCase();
                            });
                        }

                        CodeWars Solution(2)
            function toCamelCase(str){
                var demarcs ='-_';
                return str.split('').map(function(value,index,array){
                    if(demarcs.indexOf(value) > -1){
                    return '';
                    } else if (demarcs.indexOf(array[index - 1]) > -1){
                    return value.toUpperCase();
                    } else {
                    return value;
                    }
                }).join('');
                }
                               
*/

