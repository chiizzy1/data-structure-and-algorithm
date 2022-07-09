 /*  *****
Challenge: 5 kyu String incrementer


Instructions: Your job is to write a function which increments a string, to create a new string.
If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.

Examples:
foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.

                                    MY Solution

            function incrementString(str){
                str = str.split('')
                let numbers = str.filter(a => a - a === 0).join('')
                let words = str.filter(a => a - a !== 0).join('')
                if (numbers.length < 1){ return `${str.join('')}1`}
                else{
                    let incremented = Number(numbers) + 1
                    let a = `${incremented}`.length
                    let b = numbers.length
                    a === b ? incremented : incremented = `${'0'.repeat(b-a)}${incremented}` 

                    return words + incremented
                }
            }
                                    
                                    CodeWars Solution(1)
                const incrementString = str => str.replace(/([0-8]?)(9*)$/, num => num ? Number(num) + 1 : 1);

                                      CodeWars Solution(2)
                const incrementString = string => {
                        let str = string.replace(/\d+$/, (digit) => {
                            let num = +digit + 1
                            return num.toString().padStart(digit.length, '0')
                        })
                        return /\d+$/.test(str) ? str : str + '1'
                    }

*/