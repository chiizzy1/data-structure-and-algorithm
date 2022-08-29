/*  *****
Challenge: 6kyu WeIrD StRiNg CaSe

Instructions:   Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"


                                    MySolution
                                    
                 function toWeirdCase( str ){
    str = str.split(' ')
    let ans = []

    for (let i = 0; i < str.length; i++){
        let word = str[i]
        let weird = ""
        for ( let a = 0; a < word.length; a++ ){
            if (a % 2 === 0){
                weird += word[a].toUpperCase()
            }
            else weird += word[a]
        }

        ans.push(weird)
    }

    return ans.join(' ')
}

                                  CodeWars Solution 
                   
                   function toWeirdCase(string){
                    var str = '';
                    var counter = 0;
                    
                    for(var i = 0; i < string.length; i++) {
                        if(string[i] === ' ') {
                        str += ' ';
                        counter = 0;
                        } else if(counter % 2 === 0) {
                        str += string[i].toUpperCase();
                        counter++;
                        } else if(counter % 2 !== 0) {
                        str += string[i].toLowerCase();
                        counter++;
                        }
                    }
                    return str;
                };
*/

function toWeirdCase( str ){
    str = str.split(' ')
    let ans = []

    for (let i = 0; i < str.length; i++){
        let word = str[i]
        let weird = ""
        for ( let a = 0; a < word.length; a++ ){
            if (a % 2 === 0){
                weird += word[a].toUpperCase()
            }
            else weird += word[a]
        }

        ans.push(weird)
    }

    return ans.join(' ')
}