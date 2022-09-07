/*  *****
Challenge: 6kyu  Encrypt this!

Instructions:  You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"

                                MySolution

                var encryptThis = function(text) {
                    text = text.split(' ')
                    
                        return text.map( word => {
                        if (word.length === 1){ return word.charCodeAt(0) }
                        if (word.length === 2){ return word.charCodeAt(0) + word[1]}
                        let s = word[1]
                        let l = word[word.length - 1]
                        let encrypted = word.charCodeAt(0)

                        return encrypted + l + word.slice(2, word.length - 1) + s
                        }).join(' ')

                    }
               
                        Codewar Solution

                        const encryptThis = text =>
  text.split(' ')
    .map(w => (w.length > 2) ? `${w[0]}${w[w.length - 1]}${w.slice(2, w.length - 1)}${w[1]}` : w)
      .map(w => w.length ? w.replace(/^./, $1 => $1.charCodeAt(0)) : w )
        .join(' ')

*/