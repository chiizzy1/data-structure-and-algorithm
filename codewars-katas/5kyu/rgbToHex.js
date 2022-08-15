/*  *****
Challenge: 5 kyu
RGB To Hex Conversion

Instructions: The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3

                                    MY Solution

              function rgb(r, g, b){
                    let ans = [r,g,b].map( num =>{
                    if ( num >= 255 ){ return "FF" }
                    else if ( num <= 0 ){ return "00" }
                    else{
                        return `0${(num).toString(16).toUpperCase()}`.slice(-2)
                    }
                    })
                    return ans.join('')
                }

                                CodeWars Solution(1)

             function rgb(r, g, b){
                return [r,g,b].map(function(x) {
                    return ('0'+Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
                }).join('').toUpperCase();
            }

                                CodeWars Solution(2)

                    const rgb = (...arg) => arg
                        .map(it => Math.max(Math.min(it, 255), 0)
                            .toString(16)
                            .padStart(2, '0')
                            .toUpperCase()
                        ).join('');

*/