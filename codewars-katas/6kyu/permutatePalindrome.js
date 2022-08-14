/*  *****
Challenge: 6kyu Permute a Palindrome


Instructions: Write a function that will check whether ANY permutation of the characters of the
input string is a palindrome. Bonus points for a solution that is efficient and/or that uses 
only built-in language functions. Deem yourself brilliant if you can come up with a version 
that does not use any function whatsoever.

Example
madam -> True
adamm -> True
junk -> False

                                    MySolution(1)
                     
                function permuteAPalindrome(str){

                    str = str.toLowerCase()

                    let obj = {}
                    let ans = 0

                    for (let i = 0; i < str.length; i++){
                        let char = str[i]
                        obj[char] = obj[char] + 1 || 1
                    }

                    for (const letters in obj) {
                        obj[letters] % 2 !== 0 ? ans++ : ans
                    }
                    
                    return ans <= 1;

                }

                                    MySolution(2)
                   
                        function permuteAPalindrome(str){
                            str = str.toLowerCase()

                            let obj = {}
                            let ans = []

                            for (let i = 0; i < str.length; i++){
                                let char = str[i]
                                obj[char] = obj[char] + 1 || 1
                            }

                            for (const letters in obj) {
                                ans.push(obj[letters]);
                            }
                            
                            return ans.filter(el => el % 2 !== 0).length <= 1;

                        }
        

                                CodeWar Solution

                   function permuteAPalindrome (input) { 
                        let arr = [];
                        let unique = [...new Set(input.split(''))];
                        
                        for(let i = 0; i < unique.length; i++){
                        arr.push(input.split('').filter(el => el === unique[i]).length);
                        }
                        return arr.filter(el => el % 2 !== 0).length <= 1;
                    }

*/


// Explanation

function permuteAPalindrome(str){

    // convert all letters in str to lower case
    str = str.toLowerCase()


    let obj = {}
    let ans = 0

    // Loop through each letter in str and insert them into obj

    for (let i = 0; i < str.length; i++){
        let char = str[i]
        obj[char] = obj[char] + 1 || 1
    }

    // In a palindrome max number of letter with odd values is one 
    // Loop through obj, get the value of each key (letter) in the object
    // Increment the count of ans, whenever a key has an odd value

    for (const letters in obj) {
        obj[letters] % 2 !== 0 ? ans++ : ans
    }
    
    // If number of letters with odd value is more than one, str is not a palindrome 
    return ans <= 1;

}



