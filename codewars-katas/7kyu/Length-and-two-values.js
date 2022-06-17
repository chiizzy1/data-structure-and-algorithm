
  /*  *****
Challenge: 7kyu Length and two values.

Instructions: 
              

                                       MY Solution
          
           function alternate(n, firstValue, secondValue){
            let arr = [];
            if (n > 0) {
                arr = [firstValue]
                for (let i = 1; i < n; i++){
                arr[arr.length - 1] === firstValue ? arr.push(secondValue) : arr.push(firstValue)
                }
                return arr
            } 
            else { return arr }
            }
               
                                       CodeWars Solution(s)

               function alternate(n, firstValue, secondValue){
                const array = [];
                for (let i = 0; i < n; i++) {
                    array.push(i % 2 === 0 ? firstValue : secondValue)
                }
                return array;
                }
*/
