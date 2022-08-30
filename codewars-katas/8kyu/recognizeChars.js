/*  *****
Challenge: 8kyu  Correct the mistakes of the character recognition software

Instructions: Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.


                                    MySolution
                                    
                function correct(string)
                    {
                    let str = ""
                    
                    for (let i = 0; i < string.length; i++){
                        if (string[i] === '5'){ str += "S"}
                        else if (string[i] === '0'){ str += "O"}
                        else if (string[i] === '1'){ str += "I"}
                        else {str += string[i]}
                    }
                    
                    return str
                    }

                                CodeWars Solution
                 correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')
*/