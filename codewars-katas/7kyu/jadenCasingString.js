/*  *****
Challenge: 7kyu Jaden Casing Strings

Instructions: 

                                       MY Solution
                    String.prototype.toJadenCase = function () {
                         return this.split(' ').map(([initial, ...rest]) => [initial.toUpperCase(), ...rest].join("")).join(" ")
                    };

                                       CodeWars Solution(s)

        String.prototype.toJadenCase = function() {
            return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
        };
*/

