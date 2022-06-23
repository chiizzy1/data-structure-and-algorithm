

  /*  *****
Challenge:

Instructions: 

                                       MY Solution
                        function multiply(a, b)
                        {
                        return (BigInt(a) * BigInt(b)).toString()
                        }

                                       
*/

/**
 *              CodeWars Solution(s)
 * 
 * 
 * Multiply two very big numbers passed as string.
 * @param {string} rawA
 * @param {string} rawB
 * @return {string}
 */
 function multiply(rawA, rawB) {
    const a = prepareTerm(rawA);
    const b = prepareTerm(rawB);
    
    return formatResult(carryValues(computeSubProducts(a, b)));
  }
  
  /**
   * Convert a string to an array of digits, then reverse its order
   * so the least significant digit comes first (to simplify looping).
   * e.g. '13' => [3, 1]
   * @param {string} num
   * @param {array<number>}
   */
  function prepareTerm(num) {
    return num.split('').map(digit => parseInt(digit, 10)).reverse();
  }
  
  /**
   * Compute the sums of the subproducts of the two terms.
   * e.g. [3, 2] * [5, 4] => [(3 * 5), (3 * 4) + (2 * 5), (2 * 4)] => [15, 22, 8]
   * @param {array<number>} a
   * @param {array<number>} b
   * @return {array<number>}
   */
  function computeSubProducts(a, b) {
    const products = [];
    
    for (let i = 0; i < a.length; i++) {
      let da = a[i];
    
      for (let j = 0; j < b.length; j++) {
        let db = b[j];
      
        let k = i + j;
        if (k >= products.length) products.push(0);
        
        products[k] += da * db;
      }
    }
    
    return products;
  }
  
  /**
   * Turn the array of sub-products into an array of digits, carrying the values over.
   * Note that the last item in the returned array may be a number rather than a single digit.
   * e.g. [15, 22, 8] => [5, (22 + 1), 8] => [5, 3, (8 + 2)] => [5, 3, 0, 1]
   * @param {array<number>} products
   * return {array<number>}
   */
  function carryValues(products) {
    return products.reduce((digits, prod, i) => {
      // Push the current digit
      digits.push(prod % 10);
      
      // Carry the value
      const val = Math.floor(prod / 10);
      if (i + 1 < products.length) {
        products[i + 1] += val;
      } else {
        digits.push(val);
      }
      
      return digits;
    }, []);
  }
  
  /**
   * Turn the digits array into the expected result string
   * making sure to strip any leading zeros.
   * e.g. [5, 3, 0, 1] => '1035'
   * @param {array<number>} digits
   * @return {string}
   */
  function formatResult(digits) {
    // Reverse digits array and turn it into a string
    const result = digits.reverse().map(d => d.toString()).join('');
    
    // Remove leading zeros
    return result.replace(/^0*(\d+)$/, '$1');
  }
  
