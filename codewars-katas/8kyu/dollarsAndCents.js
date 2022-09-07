/*  *****
Challenge: 8kyu  Dollars and Cents

Instructions:  39.99 becomes $39.99

The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).

Examples:

3 needs to become $3.00

3.1 needs to become $3.10

                                MySolution

                function formatMoney(amount){
                    return `$${amount.toFixed(2)}`
                }

                
*/