/*  *****
Challenge: 6kyu Create Phone Number

Instructions: Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

                                            MY Solution
                          
                                    function createPhoneNumber(numbers){
                                        let a = numbers.filter((num, index) => index < 3 ).join('')
                                        let b = numbers.filter((num, index) => index > 2 && index < 6 ).join('')
                                        let c = numbers.filter((num, index) => index > 5 ).join('')
                                        return `(${a}) ${b}-${c}`
                                    }

                                       CodeWars Solution(s)

                           function createPhoneNumber(numbers){
                            var phoneNumber = "(xxx) xxx-xxxx";
                            for(var i = 0; i < numbers.length; i++) {
                                //regex will only replace first x found
                                phoneNumber = phoneNumber.replace('x', numbers[i]);
                            }
                            return phoneNumber;
                            }

                                       CodeWars Solution(2)

                    function createPhoneNumber(numbers){
                        return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
                        }
                                       CodeWars Solution(3)

                         function createPhoneNumber(numbers){
                            return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3');
                        }

*/