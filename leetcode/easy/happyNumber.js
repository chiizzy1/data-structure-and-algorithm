/*  *****
Challenge: 202. Happy Number

Instructions:
Example 1:

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
Example 2:

Input: n = 2
Output: false

                                   Leetcode Solution
        var getDigits = (num) => {
            const digits = [];
            while (num > 0) {
                digits.push(num % 10);
                num = Math.floor(num / 10);
            }
            return digits;
            };

            var getSquaredTotal = (digits) => {
            return digits.reduce((total, digit) => total + digit * digit, 0);
            };

            var isHappy = function(n) {
            const seen = new Set();
            while (n !== 1) {
                let digits = getDigits(n);
                n = getSquaredTotal(digits);
                if (seen.has(n)) {
                return false;
                }
                seen.add(n);
            }
            return true;
            };
                

            // follow link for more explanation
        https://leetcode.com/problems/happy-number/solutions/488750/javascript-full-explanation-no-strings-uses-set/?languageTags=javascript
*/