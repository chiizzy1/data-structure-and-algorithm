/*  *****
Challenge: 6kyu  Decipher this!

Instructions:  You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces

Examples

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'

                                MySolution

                function decipherThis(str) {
                    let text = str.split(' ')
                    return text.map( word => {
                    if (word.length < 3){ return String.fromCharCode(parseInt(word)) }
                        let ints = parseInt(word)
                        let decrypted = String.fromCharCode(ints)
                        
                        let l = `${ints}`.length
                        let chars = word.slice(l)
                        

                        if (chars.length === 1){ return String.fromCharCode(parseInt(word)) + chars}
                        
                        let secondChar = word.slice(l)[0]
                        let lastChar = word[word.length - 1]
                        
                        return decrypted + lastChar + word.slice(l + 1, word.length - 1) + secondChar
                        }).join(' ')
                    }; 
               
                        Codewar Solution

                    const swap = str => {
                        return str.length >= 2
                            ? str.slice(-1) + str.slice(1, -1) + str.slice(0, 1)
                            : str;
                        };

                        const translateWord = word => {
                        const initial = word.match(/^\d+/)[0];
                        const rest = word.replace(/^\d+/, '');

                        return `${String.fromCharCode(initial)}${swap(rest)}`;
                        };

                        const decipherThis = str => {
                        return str.split(' ')
                            .map(word => translateWord(word))
                            .join(' ');
                    };   

*/